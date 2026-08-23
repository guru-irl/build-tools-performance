import React from 'react';
const LABEL_5107 = 'component_5107';
export function Component5107({ value = 5107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5107, 'data-value': derived.doubled }, children);
}
export default Component5107;

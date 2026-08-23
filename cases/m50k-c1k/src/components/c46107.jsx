import React from 'react';
const LABEL_46107 = 'component_46107';
export function Component46107({ value = 46107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46107, 'data-value': derived.doubled }, children);
}
export default Component46107;

import React from 'react';
const LABEL_39107 = 'component_39107';
export function Component39107({ value = 39107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39107, 'data-value': derived.doubled }, children);
}
export default Component39107;

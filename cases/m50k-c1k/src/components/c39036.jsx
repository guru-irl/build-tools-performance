import React from 'react';
const LABEL_39036 = 'component_39036';
export function Component39036({ value = 39036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39036, 'data-value': derived.doubled }, children);
}
export default Component39036;

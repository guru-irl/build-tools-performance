import React from 'react';
const LABEL_3036 = 'component_3036';
export function Component3036({ value = 3036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3036, 'data-value': derived.doubled }, children);
}
export default Component3036;

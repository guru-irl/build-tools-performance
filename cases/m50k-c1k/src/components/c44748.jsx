import React from 'react';
const LABEL_44748 = 'component_44748';
export function Component44748({ value = 44748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44748, 'data-value': derived.doubled }, children);
}
export default Component44748;

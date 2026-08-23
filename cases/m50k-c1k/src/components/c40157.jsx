import React from 'react';
const LABEL_40157 = 'component_40157';
export function Component40157({ value = 40157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40157, 'data-value': derived.doubled }, children);
}
export default Component40157;

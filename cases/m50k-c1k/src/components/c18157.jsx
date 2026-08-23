import React from 'react';
const LABEL_18157 = 'component_18157';
export function Component18157({ value = 18157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18157, 'data-value': derived.doubled }, children);
}
export default Component18157;

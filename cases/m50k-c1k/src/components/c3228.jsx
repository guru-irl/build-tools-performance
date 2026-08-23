import React from 'react';
const LABEL_3228 = 'component_3228';
export function Component3228({ value = 3228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3228, 'data-value': derived.doubled }, children);
}
export default Component3228;

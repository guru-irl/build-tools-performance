import React from 'react';
const LABEL_921 = 'component_921';
export function Component921({ value = 921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_921, 'data-value': derived.doubled }, children);
}
export default Component921;

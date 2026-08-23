import React from 'react';
const LABEL_4253 = 'component_4253';
export function Component4253({ value = 4253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4253, 'data-value': derived.doubled }, children);
}
export default Component4253;

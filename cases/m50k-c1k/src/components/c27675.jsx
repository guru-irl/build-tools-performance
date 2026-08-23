import React from 'react';
const LABEL_27675 = 'component_27675';
export function Component27675({ value = 27675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27675, 'data-value': derived.doubled }, children);
}
export default Component27675;

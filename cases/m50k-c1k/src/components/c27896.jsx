import React from 'react';
const LABEL_27896 = 'component_27896';
export function Component27896({ value = 27896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27896, 'data-value': derived.doubled }, children);
}
export default Component27896;

import React from 'react';
const LABEL_37177 = 'component_37177';
export function Component37177({ value = 37177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37177, 'data-value': derived.doubled }, children);
}
export default Component37177;

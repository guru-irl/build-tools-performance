import React from 'react';
const LABEL_27332 = 'component_27332';
export function Component27332({ value = 27332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27332, 'data-value': derived.doubled }, children);
}
export default Component27332;

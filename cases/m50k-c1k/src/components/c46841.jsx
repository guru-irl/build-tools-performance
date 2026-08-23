import React from 'react';
const LABEL_46841 = 'component_46841';
export function Component46841({ value = 46841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46841, 'data-value': derived.doubled }, children);
}
export default Component46841;

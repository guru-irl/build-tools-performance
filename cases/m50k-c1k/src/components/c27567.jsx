import React from 'react';
const LABEL_27567 = 'component_27567';
export function Component27567({ value = 27567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27567, 'data-value': derived.doubled }, children);
}
export default Component27567;

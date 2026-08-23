import React from 'react';
const LABEL_27229 = 'component_27229';
export function Component27229({ value = 27229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27229, 'data-value': derived.doubled }, children);
}
export default Component27229;

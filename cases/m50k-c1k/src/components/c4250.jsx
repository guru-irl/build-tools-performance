import React from 'react';
const LABEL_4250 = 'component_4250';
export function Component4250({ value = 4250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4250, 'data-value': derived.doubled }, children);
}
export default Component4250;

import React from 'react';
const LABEL_27022 = 'component_27022';
export function Component27022({ value = 27022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27022, 'data-value': derived.doubled }, children);
}
export default Component27022;

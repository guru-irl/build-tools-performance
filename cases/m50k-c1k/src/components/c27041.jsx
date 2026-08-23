import React from 'react';
const LABEL_27041 = 'component_27041';
export function Component27041({ value = 27041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27041, 'data-value': derived.doubled }, children);
}
export default Component27041;

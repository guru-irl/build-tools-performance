import React from 'react';
const LABEL_27230 = 'component_27230';
export function Component27230({ value = 27230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27230, 'data-value': derived.doubled }, children);
}
export default Component27230;

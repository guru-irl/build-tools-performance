import React from 'react';
const LABEL_27114 = 'component_27114';
export function Component27114({ value = 27114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27114, 'data-value': derived.doubled }, children);
}
export default Component27114;

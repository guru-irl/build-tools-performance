import React from 'react';
const LABEL_27524 = 'component_27524';
export function Component27524({ value = 27524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27524, 'data-value': derived.doubled }, children);
}
export default Component27524;

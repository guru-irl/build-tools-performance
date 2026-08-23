import React from 'react';
const LABEL_27288 = 'component_27288';
export function Component27288({ value = 27288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27288, 'data-value': derived.doubled }, children);
}
export default Component27288;

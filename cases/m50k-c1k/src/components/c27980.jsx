import React from 'react';
const LABEL_27980 = 'component_27980';
export function Component27980({ value = 27980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27980, 'data-value': derived.doubled }, children);
}
export default Component27980;

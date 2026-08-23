import React from 'react';
const LABEL_27190 = 'component_27190';
export function Component27190({ value = 27190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27190, 'data-value': derived.doubled }, children);
}
export default Component27190;

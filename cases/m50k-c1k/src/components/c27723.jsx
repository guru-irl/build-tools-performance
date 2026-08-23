import React from 'react';
const LABEL_27723 = 'component_27723';
export function Component27723({ value = 27723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27723, 'data-value': derived.doubled }, children);
}
export default Component27723;

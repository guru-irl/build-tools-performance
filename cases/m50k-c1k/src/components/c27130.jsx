import React from 'react';
const LABEL_27130 = 'component_27130';
export function Component27130({ value = 27130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27130, 'data-value': derived.doubled }, children);
}
export default Component27130;

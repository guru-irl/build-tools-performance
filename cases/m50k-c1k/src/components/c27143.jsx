import React from 'react';
const LABEL_27143 = 'component_27143';
export function Component27143({ value = 27143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27143, 'data-value': derived.doubled }, children);
}
export default Component27143;

import React from 'react';
const LABEL_27295 = 'component_27295';
export function Component27295({ value = 27295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27295, 'data-value': derived.doubled }, children);
}
export default Component27295;

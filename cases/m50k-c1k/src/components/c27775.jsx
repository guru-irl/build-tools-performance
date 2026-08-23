import React from 'react';
const LABEL_27775 = 'component_27775';
export function Component27775({ value = 27775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27775, 'data-value': derived.doubled }, children);
}
export default Component27775;

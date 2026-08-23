import React from 'react';
const LABEL_27686 = 'component_27686';
export function Component27686({ value = 27686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27686, 'data-value': derived.doubled }, children);
}
export default Component27686;

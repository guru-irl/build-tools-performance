import React from 'react';
const LABEL_27961 = 'component_27961';
export function Component27961({ value = 27961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27961, 'data-value': derived.doubled }, children);
}
export default Component27961;

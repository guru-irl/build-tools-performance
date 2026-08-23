import React from 'react';
const LABEL_27860 = 'component_27860';
export function Component27860({ value = 27860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27860, 'data-value': derived.doubled }, children);
}
export default Component27860;

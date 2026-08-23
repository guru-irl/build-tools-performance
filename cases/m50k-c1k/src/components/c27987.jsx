import React from 'react';
const LABEL_27987 = 'component_27987';
export function Component27987({ value = 27987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27987, 'data-value': derived.doubled }, children);
}
export default Component27987;

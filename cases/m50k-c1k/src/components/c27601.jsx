import React from 'react';
const LABEL_27601 = 'component_27601';
export function Component27601({ value = 27601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27601, 'data-value': derived.doubled }, children);
}
export default Component27601;

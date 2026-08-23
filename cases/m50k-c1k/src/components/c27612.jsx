import React from 'react';
const LABEL_27612 = 'component_27612';
export function Component27612({ value = 27612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27612, 'data-value': derived.doubled }, children);
}
export default Component27612;

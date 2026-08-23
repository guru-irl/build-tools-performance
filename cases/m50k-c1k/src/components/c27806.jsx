import React from 'react';
const LABEL_27806 = 'component_27806';
export function Component27806({ value = 27806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27806, 'data-value': derived.doubled }, children);
}
export default Component27806;

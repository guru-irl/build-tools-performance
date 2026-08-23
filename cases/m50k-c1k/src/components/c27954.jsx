import React from 'react';
const LABEL_27954 = 'component_27954';
export function Component27954({ value = 27954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27954, 'data-value': derived.doubled }, children);
}
export default Component27954;

import React from 'react';
const LABEL_27313 = 'component_27313';
export function Component27313({ value = 27313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27313, 'data-value': derived.doubled }, children);
}
export default Component27313;

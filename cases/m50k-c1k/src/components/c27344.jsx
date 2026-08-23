import React from 'react';
const LABEL_27344 = 'component_27344';
export function Component27344({ value = 27344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27344, 'data-value': derived.doubled }, children);
}
export default Component27344;

import React from 'react';
const LABEL_27745 = 'component_27745';
export function Component27745({ value = 27745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27745, 'data-value': derived.doubled }, children);
}
export default Component27745;

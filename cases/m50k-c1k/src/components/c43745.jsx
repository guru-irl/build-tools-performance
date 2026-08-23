import React from 'react';
const LABEL_43745 = 'component_43745';
export function Component43745({ value = 43745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43745, 'data-value': derived.doubled }, children);
}
export default Component43745;

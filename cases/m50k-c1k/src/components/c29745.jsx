import React from 'react';
const LABEL_29745 = 'component_29745';
export function Component29745({ value = 29745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29745, 'data-value': derived.doubled }, children);
}
export default Component29745;

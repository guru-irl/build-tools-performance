import React from 'react';
const LABEL_18451 = 'component_18451';
export function Component18451({ value = 18451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18451, 'data-value': derived.doubled }, children);
}
export default Component18451;

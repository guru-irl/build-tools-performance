import React from 'react';
const LABEL_18039 = 'component_18039';
export function Component18039({ value = 18039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18039, 'data-value': derived.doubled }, children);
}
export default Component18039;

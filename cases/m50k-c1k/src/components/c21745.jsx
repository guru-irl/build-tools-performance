import React from 'react';
const LABEL_21745 = 'component_21745';
export function Component21745({ value = 21745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21745, 'data-value': derived.doubled }, children);
}
export default Component21745;

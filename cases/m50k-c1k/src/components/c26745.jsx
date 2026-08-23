import React from 'react';
const LABEL_26745 = 'component_26745';
export function Component26745({ value = 26745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26745, 'data-value': derived.doubled }, children);
}
export default Component26745;

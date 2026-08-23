import React from 'react';
const LABEL_18576 = 'component_18576';
export function Component18576({ value = 18576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18576, 'data-value': derived.doubled }, children);
}
export default Component18576;

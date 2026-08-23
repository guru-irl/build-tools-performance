import React from 'react';
const LABEL_18384 = 'component_18384';
export function Component18384({ value = 18384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18384, 'data-value': derived.doubled }, children);
}
export default Component18384;

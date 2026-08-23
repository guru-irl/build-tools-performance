import React from 'react';
const LABEL_18636 = 'component_18636';
export function Component18636({ value = 18636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18636, 'data-value': derived.doubled }, children);
}
export default Component18636;

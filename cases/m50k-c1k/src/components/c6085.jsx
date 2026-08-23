import React from 'react';
const LABEL_6085 = 'component_6085';
export function Component6085({ value = 6085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6085, 'data-value': derived.doubled }, children);
}
export default Component6085;

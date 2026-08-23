import React from 'react';
const LABEL_26462 = 'component_26462';
export function Component26462({ value = 26462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26462, 'data-value': derived.doubled }, children);
}
export default Component26462;

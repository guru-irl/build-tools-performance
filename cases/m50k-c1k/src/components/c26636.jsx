import React from 'react';
const LABEL_26636 = 'component_26636';
export function Component26636({ value = 26636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26636, 'data-value': derived.doubled }, children);
}
export default Component26636;

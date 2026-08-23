import React from 'react';
const LABEL_46636 = 'component_46636';
export function Component46636({ value = 46636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46636, 'data-value': derived.doubled }, children);
}
export default Component46636;

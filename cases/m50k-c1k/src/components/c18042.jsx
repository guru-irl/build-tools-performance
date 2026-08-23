import React from 'react';
const LABEL_18042 = 'component_18042';
export function Component18042({ value = 18042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18042, 'data-value': derived.doubled }, children);
}
export default Component18042;

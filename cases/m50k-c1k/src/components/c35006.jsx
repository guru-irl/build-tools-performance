import React from 'react';
const LABEL_35006 = 'component_35006';
export function Component35006({ value = 35006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35006, 'data-value': derived.doubled }, children);
}
export default Component35006;

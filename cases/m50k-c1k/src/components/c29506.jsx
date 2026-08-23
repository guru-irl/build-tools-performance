import React from 'react';
const LABEL_29506 = 'component_29506';
export function Component29506({ value = 29506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29506, 'data-value': derived.doubled }, children);
}
export default Component29506;

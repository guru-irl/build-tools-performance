import React from 'react';
const LABEL_29616 = 'component_29616';
export function Component29616({ value = 29616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29616, 'data-value': derived.doubled }, children);
}
export default Component29616;

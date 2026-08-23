import React from 'react';
const LABEL_35274 = 'component_35274';
export function Component35274({ value = 35274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35274, 'data-value': derived.doubled }, children);
}
export default Component35274;

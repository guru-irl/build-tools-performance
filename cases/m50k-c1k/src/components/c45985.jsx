import React from 'react';
const LABEL_45985 = 'component_45985';
export function Component45985({ value = 45985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45985, 'data-value': derived.doubled }, children);
}
export default Component45985;

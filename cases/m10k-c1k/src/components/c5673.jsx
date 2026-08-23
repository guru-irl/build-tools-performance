import React from 'react';
const LABEL_5673 = 'component_5673';
export function Component5673({ value = 5673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5673, 'data-value': derived.doubled }, children);
}
export default Component5673;

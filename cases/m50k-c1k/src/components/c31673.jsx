import React from 'react';
const LABEL_31673 = 'component_31673';
export function Component31673({ value = 31673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31673, 'data-value': derived.doubled }, children);
}
export default Component31673;

import React from 'react';
const LABEL_28673 = 'component_28673';
export function Component28673({ value = 28673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28673, 'data-value': derived.doubled }, children);
}
export default Component28673;

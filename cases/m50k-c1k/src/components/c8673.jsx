import React from 'react';
const LABEL_8673 = 'component_8673';
export function Component8673({ value = 8673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8673, 'data-value': derived.doubled }, children);
}
export default Component8673;

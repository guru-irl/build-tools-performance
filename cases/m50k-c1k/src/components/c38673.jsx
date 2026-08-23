import React from 'react';
const LABEL_38673 = 'component_38673';
export function Component38673({ value = 38673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38673, 'data-value': derived.doubled }, children);
}
export default Component38673;

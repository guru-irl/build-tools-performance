import React from 'react';
const LABEL_11673 = 'component_11673';
export function Component11673({ value = 11673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11673, 'data-value': derived.doubled }, children);
}
export default Component11673;

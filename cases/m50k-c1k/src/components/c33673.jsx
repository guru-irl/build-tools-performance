import React from 'react';
const LABEL_33673 = 'component_33673';
export function Component33673({ value = 33673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33673, 'data-value': derived.doubled }, children);
}
export default Component33673;

import React from 'react';
const LABEL_2673 = 'component_2673';
export function Component2673({ value = 2673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2673, 'data-value': derived.doubled }, children);
}
export default Component2673;

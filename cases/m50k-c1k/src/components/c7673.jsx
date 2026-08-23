import React from 'react';
const LABEL_7673 = 'component_7673';
export function Component7673({ value = 7673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7673, 'data-value': derived.doubled }, children);
}
export default Component7673;

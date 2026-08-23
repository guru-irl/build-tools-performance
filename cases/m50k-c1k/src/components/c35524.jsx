import React from 'react';
const LABEL_35524 = 'component_35524';
export function Component35524({ value = 35524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35524, 'data-value': derived.doubled }, children);
}
export default Component35524;

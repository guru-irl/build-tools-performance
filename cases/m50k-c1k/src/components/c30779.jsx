import React from 'react';
const LABEL_30779 = 'component_30779';
export function Component30779({ value = 30779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30779, 'data-value': derived.doubled }, children);
}
export default Component30779;

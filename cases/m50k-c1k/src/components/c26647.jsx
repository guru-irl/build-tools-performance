import React from 'react';
const LABEL_26647 = 'component_26647';
export function Component26647({ value = 26647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26647, 'data-value': derived.doubled }, children);
}
export default Component26647;

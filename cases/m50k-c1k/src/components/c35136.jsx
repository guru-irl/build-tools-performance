import React from 'react';
const LABEL_35136 = 'component_35136';
export function Component35136({ value = 35136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35136, 'data-value': derived.doubled }, children);
}
export default Component35136;

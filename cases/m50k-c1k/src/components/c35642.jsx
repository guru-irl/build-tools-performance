import React from 'react';
const LABEL_35642 = 'component_35642';
export function Component35642({ value = 35642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35642, 'data-value': derived.doubled }, children);
}
export default Component35642;

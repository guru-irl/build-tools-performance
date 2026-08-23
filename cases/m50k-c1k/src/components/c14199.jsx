import React from 'react';
const LABEL_14199 = 'component_14199';
export function Component14199({ value = 14199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14199, 'data-value': derived.doubled }, children);
}
export default Component14199;

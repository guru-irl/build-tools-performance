import React from 'react';
const LABEL_29199 = 'component_29199';
export function Component29199({ value = 29199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29199, 'data-value': derived.doubled }, children);
}
export default Component29199;

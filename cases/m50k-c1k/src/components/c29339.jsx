import React from 'react';
const LABEL_29339 = 'component_29339';
export function Component29339({ value = 29339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29339, 'data-value': derived.doubled }, children);
}
export default Component29339;

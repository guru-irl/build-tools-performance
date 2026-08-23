import React from 'react';
const LABEL_31339 = 'component_31339';
export function Component31339({ value = 31339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31339, 'data-value': derived.doubled }, children);
}
export default Component31339;

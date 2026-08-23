import React from 'react';
const LABEL_29108 = 'component_29108';
export function Component29108({ value = 29108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29108, 'data-value': derived.doubled }, children);
}
export default Component29108;

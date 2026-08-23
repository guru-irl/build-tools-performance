import React from 'react';
const LABEL_7108 = 'component_7108';
export function Component7108({ value = 7108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7108, 'data-value': derived.doubled }, children);
}
export default Component7108;

import React from 'react';
const LABEL_32108 = 'component_32108';
export function Component32108({ value = 32108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32108, 'data-value': derived.doubled }, children);
}
export default Component32108;

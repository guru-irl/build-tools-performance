import React from 'react';
const LABEL_40108 = 'component_40108';
export function Component40108({ value = 40108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40108, 'data-value': derived.doubled }, children);
}
export default Component40108;

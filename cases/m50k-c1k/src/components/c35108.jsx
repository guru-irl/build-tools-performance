import React from 'react';
const LABEL_35108 = 'component_35108';
export function Component35108({ value = 35108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35108, 'data-value': derived.doubled }, children);
}
export default Component35108;

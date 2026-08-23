import React from 'react';
const LABEL_34108 = 'component_34108';
export function Component34108({ value = 34108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34108, 'data-value': derived.doubled }, children);
}
export default Component34108;

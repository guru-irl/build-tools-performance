import React from 'react';
const LABEL_34061 = 'component_34061';
export function Component34061({ value = 34061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34061, 'data-value': derived.doubled }, children);
}
export default Component34061;

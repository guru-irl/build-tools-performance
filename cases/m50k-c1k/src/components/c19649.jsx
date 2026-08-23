import React from 'react';
const LABEL_19649 = 'component_19649';
export function Component19649({ value = 19649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19649, 'data-value': derived.doubled }, children);
}
export default Component19649;

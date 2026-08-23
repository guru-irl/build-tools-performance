import React from 'react';
const LABEL_38840 = 'component_38840';
export function Component38840({ value = 38840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38840, 'data-value': derived.doubled }, children);
}
export default Component38840;

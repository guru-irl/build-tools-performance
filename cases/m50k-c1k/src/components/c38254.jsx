import React from 'react';
const LABEL_38254 = 'component_38254';
export function Component38254({ value = 38254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38254, 'data-value': derived.doubled }, children);
}
export default Component38254;

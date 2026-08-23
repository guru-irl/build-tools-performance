import React from 'react';
const LABEL_38000 = 'component_38000';
export function Component38000({ value = 38000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38000, 'data-value': derived.doubled }, children);
}
export default Component38000;

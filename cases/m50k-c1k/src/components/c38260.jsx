import React from 'react';
const LABEL_38260 = 'component_38260';
export function Component38260({ value = 38260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38260, 'data-value': derived.doubled }, children);
}
export default Component38260;

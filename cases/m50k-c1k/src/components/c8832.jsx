import React from 'react';
const LABEL_8832 = 'component_8832';
export function Component8832({ value = 8832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8832, 'data-value': derived.doubled }, children);
}
export default Component8832;

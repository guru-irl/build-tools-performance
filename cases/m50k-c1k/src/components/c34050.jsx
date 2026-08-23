import React from 'react';
const LABEL_34050 = 'component_34050';
export function Component34050({ value = 34050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34050, 'data-value': derived.doubled }, children);
}
export default Component34050;

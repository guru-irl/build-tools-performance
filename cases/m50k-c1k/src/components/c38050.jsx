import React from 'react';
const LABEL_38050 = 'component_38050';
export function Component38050({ value = 38050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38050, 'data-value': derived.doubled }, children);
}
export default Component38050;

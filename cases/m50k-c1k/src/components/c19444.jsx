import React from 'react';
const LABEL_19444 = 'component_19444';
export function Component19444({ value = 19444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19444, 'data-value': derived.doubled }, children);
}
export default Component19444;

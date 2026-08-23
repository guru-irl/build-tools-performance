import React from 'react';
const LABEL_46229 = 'component_46229';
export function Component46229({ value = 46229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46229, 'data-value': derived.doubled }, children);
}
export default Component46229;

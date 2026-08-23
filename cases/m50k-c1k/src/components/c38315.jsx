import React from 'react';
const LABEL_38315 = 'component_38315';
export function Component38315({ value = 38315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38315, 'data-value': derived.doubled }, children);
}
export default Component38315;

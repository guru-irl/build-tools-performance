import React from 'react';
const LABEL_34315 = 'component_34315';
export function Component34315({ value = 34315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34315, 'data-value': derived.doubled }, children);
}
export default Component34315;

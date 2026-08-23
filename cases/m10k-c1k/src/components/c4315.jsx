import React from 'react';
const LABEL_4315 = 'component_4315';
export function Component4315({ value = 4315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4315, 'data-value': derived.doubled }, children);
}
export default Component4315;

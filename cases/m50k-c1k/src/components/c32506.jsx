import React from 'react';
const LABEL_32506 = 'component_32506';
export function Component32506({ value = 32506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32506, 'data-value': derived.doubled }, children);
}
export default Component32506;

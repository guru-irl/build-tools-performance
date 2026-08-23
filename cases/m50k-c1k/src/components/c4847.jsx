import React from 'react';
const LABEL_4847 = 'component_4847';
export function Component4847({ value = 4847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4847, 'data-value': derived.doubled }, children);
}
export default Component4847;

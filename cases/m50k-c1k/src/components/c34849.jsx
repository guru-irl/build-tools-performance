import React from 'react';
const LABEL_34849 = 'component_34849';
export function Component34849({ value = 34849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34849, 'data-value': derived.doubled }, children);
}
export default Component34849;

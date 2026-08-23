import React from 'react';
const LABEL_34503 = 'component_34503';
export function Component34503({ value = 34503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34503, 'data-value': derived.doubled }, children);
}
export default Component34503;

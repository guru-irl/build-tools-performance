import React from 'react';
const LABEL_34663 = 'component_34663';
export function Component34663({ value = 34663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34663, 'data-value': derived.doubled }, children);
}
export default Component34663;

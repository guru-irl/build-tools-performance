import React from 'react';
const LABEL_34820 = 'component_34820';
export function Component34820({ value = 34820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34820, 'data-value': derived.doubled }, children);
}
export default Component34820;

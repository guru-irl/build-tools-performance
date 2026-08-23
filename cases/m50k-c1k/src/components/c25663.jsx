import React from 'react';
const LABEL_25663 = 'component_25663';
export function Component25663({ value = 25663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25663, 'data-value': derived.doubled }, children);
}
export default Component25663;

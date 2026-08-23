import React from 'react';
const LABEL_25820 = 'component_25820';
export function Component25820({ value = 25820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25820, 'data-value': derived.doubled }, children);
}
export default Component25820;

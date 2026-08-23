import React from 'react';
const LABEL_25828 = 'component_25828';
export function Component25828({ value = 25828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25828, 'data-value': derived.doubled }, children);
}
export default Component25828;

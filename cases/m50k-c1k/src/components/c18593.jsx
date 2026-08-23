import React from 'react';
const LABEL_18593 = 'component_18593';
export function Component18593({ value = 18593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18593, 'data-value': derived.doubled }, children);
}
export default Component18593;

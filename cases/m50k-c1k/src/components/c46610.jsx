import React from 'react';
const LABEL_46610 = 'component_46610';
export function Component46610({ value = 46610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46610, 'data-value': derived.doubled }, children);
}
export default Component46610;

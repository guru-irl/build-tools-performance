import React from 'react';
const LABEL_19610 = 'component_19610';
export function Component19610({ value = 19610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19610, 'data-value': derived.doubled }, children);
}
export default Component19610;

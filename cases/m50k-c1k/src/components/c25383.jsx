import React from 'react';
const LABEL_25383 = 'component_25383';
export function Component25383({ value = 25383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25383, 'data-value': derived.doubled }, children);
}
export default Component25383;

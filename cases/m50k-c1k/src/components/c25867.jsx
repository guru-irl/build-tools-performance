import React from 'react';
const LABEL_25867 = 'component_25867';
export function Component25867({ value = 25867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25867, 'data-value': derived.doubled }, children);
}
export default Component25867;

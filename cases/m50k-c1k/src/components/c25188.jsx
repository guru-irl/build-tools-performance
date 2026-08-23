import React from 'react';
const LABEL_25188 = 'component_25188';
export function Component25188({ value = 25188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25188, 'data-value': derived.doubled }, children);
}
export default Component25188;

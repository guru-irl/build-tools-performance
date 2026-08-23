import React from 'react';
const LABEL_25781 = 'component_25781';
export function Component25781({ value = 25781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25781, 'data-value': derived.doubled }, children);
}
export default Component25781;

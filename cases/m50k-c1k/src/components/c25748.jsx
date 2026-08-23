import React from 'react';
const LABEL_25748 = 'component_25748';
export function Component25748({ value = 25748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25748, 'data-value': derived.doubled }, children);
}
export default Component25748;

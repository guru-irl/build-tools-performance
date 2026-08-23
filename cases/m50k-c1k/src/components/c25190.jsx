import React from 'react';
const LABEL_25190 = 'component_25190';
export function Component25190({ value = 25190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25190, 'data-value': derived.doubled }, children);
}
export default Component25190;

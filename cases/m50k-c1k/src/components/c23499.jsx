import React from 'react';
const LABEL_23499 = 'component_23499';
export function Component23499({ value = 23499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23499, 'data-value': derived.doubled }, children);
}
export default Component23499;

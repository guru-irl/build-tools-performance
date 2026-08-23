import React from 'react';
const LABEL_19279 = 'component_19279';
export function Component19279({ value = 19279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19279, 'data-value': derived.doubled }, children);
}
export default Component19279;

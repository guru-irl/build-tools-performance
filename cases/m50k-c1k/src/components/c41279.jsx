import React from 'react';
const LABEL_41279 = 'component_41279';
export function Component41279({ value = 41279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41279, 'data-value': derived.doubled }, children);
}
export default Component41279;

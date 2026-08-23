import React from 'react';
const LABEL_19879 = 'component_19879';
export function Component19879({ value = 19879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19879, 'data-value': derived.doubled }, children);
}
export default Component19879;

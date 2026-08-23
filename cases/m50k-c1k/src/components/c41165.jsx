import React from 'react';
const LABEL_41165 = 'component_41165';
export function Component41165({ value = 41165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41165, 'data-value': derived.doubled }, children);
}
export default Component41165;

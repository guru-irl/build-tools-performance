import React from 'react';
const LABEL_41837 = 'component_41837';
export function Component41837({ value = 41837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41837, 'data-value': derived.doubled }, children);
}
export default Component41837;

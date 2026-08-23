import React from 'react';
const LABEL_41330 = 'component_41330';
export function Component41330({ value = 41330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41330, 'data-value': derived.doubled }, children);
}
export default Component41330;

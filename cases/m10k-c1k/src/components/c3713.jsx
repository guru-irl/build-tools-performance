import React from 'react';
const LABEL_3713 = 'component_3713';
export function Component3713({ value = 3713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3713, 'data-value': derived.doubled }, children);
}
export default Component3713;

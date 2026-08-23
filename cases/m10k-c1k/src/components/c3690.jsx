import React from 'react';
const LABEL_3690 = 'component_3690';
export function Component3690({ value = 3690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3690, 'data-value': derived.doubled }, children);
}
export default Component3690;

import React from 'react';
const LABEL_38778 = 'component_38778';
export function Component38778({ value = 38778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38778, 'data-value': derived.doubled }, children);
}
export default Component38778;

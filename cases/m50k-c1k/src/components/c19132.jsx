import React from 'react';
const LABEL_19132 = 'component_19132';
export function Component19132({ value = 19132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19132, 'data-value': derived.doubled }, children);
}
export default Component19132;

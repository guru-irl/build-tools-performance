import React from 'react';
const LABEL_19105 = 'component_19105';
export function Component19105({ value = 19105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19105, 'data-value': derived.doubled }, children);
}
export default Component19105;

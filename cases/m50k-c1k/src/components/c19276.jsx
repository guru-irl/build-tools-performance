import React from 'react';
const LABEL_19276 = 'component_19276';
export function Component19276({ value = 19276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19276, 'data-value': derived.doubled }, children);
}
export default Component19276;

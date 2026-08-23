import React from 'react';
const LABEL_45649 = 'component_45649';
export function Component45649({ value = 45649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45649, 'data-value': derived.doubled }, children);
}
export default Component45649;

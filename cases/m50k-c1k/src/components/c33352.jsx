import React from 'react';
const LABEL_33352 = 'component_33352';
export function Component33352({ value = 33352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33352, 'data-value': derived.doubled }, children);
}
export default Component33352;

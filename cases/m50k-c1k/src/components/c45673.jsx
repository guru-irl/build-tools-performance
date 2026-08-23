import React from 'react';
const LABEL_45673 = 'component_45673';
export function Component45673({ value = 45673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45673, 'data-value': derived.doubled }, children);
}
export default Component45673;

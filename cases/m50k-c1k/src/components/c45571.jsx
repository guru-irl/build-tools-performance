import React from 'react';
const LABEL_45571 = 'component_45571';
export function Component45571({ value = 45571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45571, 'data-value': derived.doubled }, children);
}
export default Component45571;

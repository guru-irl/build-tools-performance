import React from 'react';
const LABEL_45812 = 'component_45812';
export function Component45812({ value = 45812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45812, 'data-value': derived.doubled }, children);
}
export default Component45812;

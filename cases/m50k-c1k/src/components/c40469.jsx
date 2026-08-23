import React from 'react';
const LABEL_40469 = 'component_40469';
export function Component40469({ value = 40469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40469, 'data-value': derived.doubled }, children);
}
export default Component40469;

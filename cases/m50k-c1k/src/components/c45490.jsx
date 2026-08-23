import React from 'react';
const LABEL_45490 = 'component_45490';
export function Component45490({ value = 45490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45490, 'data-value': derived.doubled }, children);
}
export default Component45490;

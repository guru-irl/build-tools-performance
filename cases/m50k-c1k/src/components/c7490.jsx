import React from 'react';
const LABEL_7490 = 'component_7490';
export function Component7490({ value = 7490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7490, 'data-value': derived.doubled }, children);
}
export default Component7490;

import React from 'react';
const LABEL_26490 = 'component_26490';
export function Component26490({ value = 26490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26490, 'data-value': derived.doubled }, children);
}
export default Component26490;

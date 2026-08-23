import React from 'react';
const LABEL_20522 = 'component_20522';
export function Component20522({ value = 20522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20522, 'data-value': derived.doubled }, children);
}
export default Component20522;

import React from 'react';
const LABEL_4276 = 'component_4276';
export function Component4276({ value = 4276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4276, 'data-value': derived.doubled }, children);
}
export default Component4276;

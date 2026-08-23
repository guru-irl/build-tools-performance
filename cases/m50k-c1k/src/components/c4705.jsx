import React from 'react';
const LABEL_4705 = 'component_4705';
export function Component4705({ value = 4705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4705, 'data-value': derived.doubled }, children);
}
export default Component4705;

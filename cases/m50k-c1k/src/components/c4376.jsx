import React from 'react';
const LABEL_4376 = 'component_4376';
export function Component4376({ value = 4376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4376, 'data-value': derived.doubled }, children);
}
export default Component4376;

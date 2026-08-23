import React from 'react';
const LABEL_20313 = 'component_20313';
export function Component20313({ value = 20313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20313, 'data-value': derived.doubled }, children);
}
export default Component20313;

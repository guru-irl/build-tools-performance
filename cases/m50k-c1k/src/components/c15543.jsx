import React from 'react';
const LABEL_15543 = 'component_15543';
export function Component15543({ value = 15543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15543, 'data-value': derived.doubled }, children);
}
export default Component15543;

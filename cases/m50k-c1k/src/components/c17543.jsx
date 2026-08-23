import React from 'react';
const LABEL_17543 = 'component_17543';
export function Component17543({ value = 17543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17543, 'data-value': derived.doubled }, children);
}
export default Component17543;

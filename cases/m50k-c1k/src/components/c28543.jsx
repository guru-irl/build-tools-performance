import React from 'react';
const LABEL_28543 = 'component_28543';
export function Component28543({ value = 28543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28543, 'data-value': derived.doubled }, children);
}
export default Component28543;

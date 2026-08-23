import React from 'react';
const LABEL_20345 = 'component_20345';
export function Component20345({ value = 20345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20345, 'data-value': derived.doubled }, children);
}
export default Component20345;

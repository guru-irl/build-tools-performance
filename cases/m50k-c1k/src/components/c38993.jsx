import React from 'react';
const LABEL_38993 = 'component_38993';
export function Component38993({ value = 38993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38993, 'data-value': derived.doubled }, children);
}
export default Component38993;

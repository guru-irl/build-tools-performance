import React from 'react';
const LABEL_38656 = 'component_38656';
export function Component38656({ value = 38656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38656, 'data-value': derived.doubled }, children);
}
export default Component38656;

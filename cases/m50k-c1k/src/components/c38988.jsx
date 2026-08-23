import React from 'react';
const LABEL_38988 = 'component_38988';
export function Component38988({ value = 38988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38988, 'data-value': derived.doubled }, children);
}
export default Component38988;

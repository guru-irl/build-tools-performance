import React from 'react';
const LABEL_37847 = 'component_37847';
export function Component37847({ value = 37847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37847, 'data-value': derived.doubled }, children);
}
export default Component37847;

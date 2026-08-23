import React from 'react';
const LABEL_12880 = 'component_12880';
export function Component12880({ value = 12880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12880, 'data-value': derived.doubled }, children);
}
export default Component12880;

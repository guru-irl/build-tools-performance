import React from 'react';
const LABEL_38548 = 'component_38548';
export function Component38548({ value = 38548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38548, 'data-value': derived.doubled }, children);
}
export default Component38548;

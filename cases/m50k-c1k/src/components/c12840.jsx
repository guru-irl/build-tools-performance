import React from 'react';
const LABEL_12840 = 'component_12840';
export function Component12840({ value = 12840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12840, 'data-value': derived.doubled }, children);
}
export default Component12840;

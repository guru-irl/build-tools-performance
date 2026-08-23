import React from 'react';
const LABEL_12291 = 'component_12291';
export function Component12291({ value = 12291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12291, 'data-value': derived.doubled }, children);
}
export default Component12291;

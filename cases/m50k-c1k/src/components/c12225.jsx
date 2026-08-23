import React from 'react';
const LABEL_12225 = 'component_12225';
export function Component12225({ value = 12225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12225, 'data-value': derived.doubled }, children);
}
export default Component12225;

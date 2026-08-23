import React from 'react';
const LABEL_12019 = 'component_12019';
export function Component12019({ value = 12019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12019, 'data-value': derived.doubled }, children);
}
export default Component12019;

import React from 'react';
const LABEL_12556 = 'component_12556';
export function Component12556({ value = 12556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12556, 'data-value': derived.doubled }, children);
}
export default Component12556;

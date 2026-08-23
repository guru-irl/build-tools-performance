import React from 'react';
const LABEL_42755 = 'component_42755';
export function Component42755({ value = 42755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42755, 'data-value': derived.doubled }, children);
}
export default Component42755;

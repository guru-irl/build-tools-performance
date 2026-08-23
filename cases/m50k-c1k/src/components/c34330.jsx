import React from 'react';
const LABEL_34330 = 'component_34330';
export function Component34330({ value = 34330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34330, 'data-value': derived.doubled }, children);
}
export default Component34330;

import React from 'react';
const LABEL_38449 = 'component_38449';
export function Component38449({ value = 38449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38449, 'data-value': derived.doubled }, children);
}
export default Component38449;

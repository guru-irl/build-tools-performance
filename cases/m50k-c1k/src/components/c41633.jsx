import React from 'react';
const LABEL_41633 = 'component_41633';
export function Component41633({ value = 41633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41633, 'data-value': derived.doubled }, children);
}
export default Component41633;

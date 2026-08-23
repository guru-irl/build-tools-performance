import React from 'react';
const LABEL_3974 = 'component_3974';
export function Component3974({ value = 3974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3974, 'data-value': derived.doubled }, children);
}
export default Component3974;

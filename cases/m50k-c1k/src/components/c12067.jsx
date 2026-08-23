import React from 'react';
const LABEL_12067 = 'component_12067';
export function Component12067({ value = 12067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12067, 'data-value': derived.doubled }, children);
}
export default Component12067;

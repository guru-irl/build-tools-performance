import React from 'react';
const LABEL_28067 = 'component_28067';
export function Component28067({ value = 28067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28067, 'data-value': derived.doubled }, children);
}
export default Component28067;

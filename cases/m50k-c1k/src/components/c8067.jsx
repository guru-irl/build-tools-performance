import React from 'react';
const LABEL_8067 = 'component_8067';
export function Component8067({ value = 8067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8067, 'data-value': derived.doubled }, children);
}
export default Component8067;

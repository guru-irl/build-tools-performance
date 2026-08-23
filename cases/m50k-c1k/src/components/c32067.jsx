import React from 'react';
const LABEL_32067 = 'component_32067';
export function Component32067({ value = 32067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32067, 'data-value': derived.doubled }, children);
}
export default Component32067;

import React from 'react';
const LABEL_23067 = 'component_23067';
export function Component23067({ value = 23067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23067, 'data-value': derived.doubled }, children);
}
export default Component23067;

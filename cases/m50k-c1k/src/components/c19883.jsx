import React from 'react';
const LABEL_19883 = 'component_19883';
export function Component19883({ value = 19883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19883, 'data-value': derived.doubled }, children);
}
export default Component19883;

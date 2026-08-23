import React from 'react';
const LABEL_19718 = 'component_19718';
export function Component19718({ value = 19718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19718, 'data-value': derived.doubled }, children);
}
export default Component19718;

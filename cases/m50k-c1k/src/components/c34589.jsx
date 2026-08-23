import React from 'react';
const LABEL_34589 = 'component_34589';
export function Component34589({ value = 34589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34589, 'data-value': derived.doubled }, children);
}
export default Component34589;

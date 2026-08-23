import React from 'react';
const LABEL_42589 = 'component_42589';
export function Component42589({ value = 42589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42589, 'data-value': derived.doubled }, children);
}
export default Component42589;

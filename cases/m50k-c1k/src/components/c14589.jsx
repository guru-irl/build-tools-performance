import React from 'react';
const LABEL_14589 = 'component_14589';
export function Component14589({ value = 14589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14589, 'data-value': derived.doubled }, children);
}
export default Component14589;

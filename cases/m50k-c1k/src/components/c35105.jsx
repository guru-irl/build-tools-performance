import React from 'react';
const LABEL_35105 = 'component_35105';
export function Component35105({ value = 35105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35105, 'data-value': derived.doubled }, children);
}
export default Component35105;

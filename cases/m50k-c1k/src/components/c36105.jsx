import React from 'react';
const LABEL_36105 = 'component_36105';
export function Component36105({ value = 36105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36105, 'data-value': derived.doubled }, children);
}
export default Component36105;

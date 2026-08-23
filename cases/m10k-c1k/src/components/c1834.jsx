import React from 'react';
const LABEL_1834 = 'component_1834';
export function Component1834({ value = 1834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1834, 'data-value': derived.doubled }, children);
}
export default Component1834;

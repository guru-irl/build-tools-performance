import React from 'react';
const LABEL_20834 = 'component_20834';
export function Component20834({ value = 20834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20834, 'data-value': derived.doubled }, children);
}
export default Component20834;

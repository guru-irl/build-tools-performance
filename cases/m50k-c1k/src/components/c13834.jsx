import React from 'react';
const LABEL_13834 = 'component_13834';
export function Component13834({ value = 13834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13834, 'data-value': derived.doubled }, children);
}
export default Component13834;

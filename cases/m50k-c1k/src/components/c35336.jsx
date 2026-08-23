import React from 'react';
const LABEL_35336 = 'component_35336';
export function Component35336({ value = 35336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35336, 'data-value': derived.doubled }, children);
}
export default Component35336;

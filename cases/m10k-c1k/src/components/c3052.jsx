import React from 'react';
const LABEL_3052 = 'component_3052';
export function Component3052({ value = 3052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3052, 'data-value': derived.doubled }, children);
}
export default Component3052;

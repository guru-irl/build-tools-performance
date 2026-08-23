import React from 'react';
const LABEL_38155 = 'component_38155';
export function Component38155({ value = 38155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38155, 'data-value': derived.doubled }, children);
}
export default Component38155;

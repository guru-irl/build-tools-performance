import React from 'react';
const LABEL_38422 = 'component_38422';
export function Component38422({ value = 38422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38422, 'data-value': derived.doubled }, children);
}
export default Component38422;

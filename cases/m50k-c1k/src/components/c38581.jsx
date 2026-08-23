import React from 'react';
const LABEL_38581 = 'component_38581';
export function Component38581({ value = 38581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38581, 'data-value': derived.doubled }, children);
}
export default Component38581;

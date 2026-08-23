import React from 'react';
const LABEL_38569 = 'component_38569';
export function Component38569({ value = 38569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38569, 'data-value': derived.doubled }, children);
}
export default Component38569;

import React from 'react';
const LABEL_38594 = 'component_38594';
export function Component38594({ value = 38594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38594, 'data-value': derived.doubled }, children);
}
export default Component38594;

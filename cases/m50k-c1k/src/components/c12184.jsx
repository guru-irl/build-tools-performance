import React from 'react';
const LABEL_12184 = 'component_12184';
export function Component12184({ value = 12184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12184, 'data-value': derived.doubled }, children);
}
export default Component12184;

import React from 'react';
const LABEL_38994 = 'component_38994';
export function Component38994({ value = 38994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38994, 'data-value': derived.doubled }, children);
}
export default Component38994;

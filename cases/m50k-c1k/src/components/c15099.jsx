import React from 'react';
const LABEL_15099 = 'component_15099';
export function Component15099({ value = 15099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15099, 'data-value': derived.doubled }, children);
}
export default Component15099;

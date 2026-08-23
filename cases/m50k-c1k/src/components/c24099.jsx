import React from 'react';
const LABEL_24099 = 'component_24099';
export function Component24099({ value = 24099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24099, 'data-value': derived.doubled }, children);
}
export default Component24099;

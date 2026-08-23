import React from 'react';
const LABEL_24670 = 'component_24670';
export function Component24670({ value = 24670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24670, 'data-value': derived.doubled }, children);
}
export default Component24670;

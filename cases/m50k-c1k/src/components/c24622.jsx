import React from 'react';
const LABEL_24622 = 'component_24622';
export function Component24622({ value = 24622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24622, 'data-value': derived.doubled }, children);
}
export default Component24622;

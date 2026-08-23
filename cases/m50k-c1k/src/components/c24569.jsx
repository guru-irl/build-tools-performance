import React from 'react';
const LABEL_24569 = 'component_24569';
export function Component24569({ value = 24569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24569, 'data-value': derived.doubled }, children);
}
export default Component24569;

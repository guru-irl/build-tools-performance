import React from 'react';
const LABEL_24610 = 'component_24610';
export function Component24610({ value = 24610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24610, 'data-value': derived.doubled }, children);
}
export default Component24610;

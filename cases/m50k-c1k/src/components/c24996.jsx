import React from 'react';
const LABEL_24996 = 'component_24996';
export function Component24996({ value = 24996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24996, 'data-value': derived.doubled }, children);
}
export default Component24996;

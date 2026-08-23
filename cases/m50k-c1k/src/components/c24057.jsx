import React from 'react';
const LABEL_24057 = 'component_24057';
export function Component24057({ value = 24057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24057, 'data-value': derived.doubled }, children);
}
export default Component24057;

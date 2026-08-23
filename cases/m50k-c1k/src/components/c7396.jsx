import React from 'react';
const LABEL_7396 = 'component_7396';
export function Component7396({ value = 7396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7396, 'data-value': derived.doubled }, children);
}
export default Component7396;

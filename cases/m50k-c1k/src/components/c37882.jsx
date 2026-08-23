import React from 'react';
const LABEL_37882 = 'component_37882';
export function Component37882({ value = 37882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37882, 'data-value': derived.doubled }, children);
}
export default Component37882;

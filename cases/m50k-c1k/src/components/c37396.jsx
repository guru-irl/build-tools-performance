import React from 'react';
const LABEL_37396 = 'component_37396';
export function Component37396({ value = 37396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37396, 'data-value': derived.doubled }, children);
}
export default Component37396;

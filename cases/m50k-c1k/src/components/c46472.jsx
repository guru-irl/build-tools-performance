import React from 'react';
const LABEL_46472 = 'component_46472';
export function Component46472({ value = 46472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46472, 'data-value': derived.doubled }, children);
}
export default Component46472;

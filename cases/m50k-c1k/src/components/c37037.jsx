import React from 'react';
const LABEL_37037 = 'component_37037';
export function Component37037({ value = 37037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37037, 'data-value': derived.doubled }, children);
}
export default Component37037;

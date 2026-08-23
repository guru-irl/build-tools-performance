import React from 'react';
const LABEL_37710 = 'component_37710';
export function Component37710({ value = 37710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37710, 'data-value': derived.doubled }, children);
}
export default Component37710;

import React from 'react';
const LABEL_37853 = 'component_37853';
export function Component37853({ value = 37853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37853, 'data-value': derived.doubled }, children);
}
export default Component37853;

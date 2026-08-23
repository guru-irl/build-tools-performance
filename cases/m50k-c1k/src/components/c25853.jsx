import React from 'react';
const LABEL_25853 = 'component_25853';
export function Component25853({ value = 25853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25853, 'data-value': derived.doubled }, children);
}
export default Component25853;

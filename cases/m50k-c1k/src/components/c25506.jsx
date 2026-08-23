import React from 'react';
const LABEL_25506 = 'component_25506';
export function Component25506({ value = 25506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25506, 'data-value': derived.doubled }, children);
}
export default Component25506;

import React from 'react';
const LABEL_25436 = 'component_25436';
export function Component25436({ value = 25436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25436, 'data-value': derived.doubled }, children);
}
export default Component25436;

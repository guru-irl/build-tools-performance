import React from 'react';
const LABEL_25070 = 'component_25070';
export function Component25070({ value = 25070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25070, 'data-value': derived.doubled }, children);
}
export default Component25070;

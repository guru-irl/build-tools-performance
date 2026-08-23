import React from 'react';
const LABEL_25468 = 'component_25468';
export function Component25468({ value = 25468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25468, 'data-value': derived.doubled }, children);
}
export default Component25468;

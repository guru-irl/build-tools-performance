import React from 'react';
const LABEL_25308 = 'component_25308';
export function Component25308({ value = 25308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25308, 'data-value': derived.doubled }, children);
}
export default Component25308;

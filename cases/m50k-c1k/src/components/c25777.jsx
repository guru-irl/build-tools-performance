import React from 'react';
const LABEL_25777 = 'component_25777';
export function Component25777({ value = 25777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25777, 'data-value': derived.doubled }, children);
}
export default Component25777;

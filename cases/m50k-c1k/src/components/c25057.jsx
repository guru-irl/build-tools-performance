import React from 'react';
const LABEL_25057 = 'component_25057';
export function Component25057({ value = 25057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25057, 'data-value': derived.doubled }, children);
}
export default Component25057;

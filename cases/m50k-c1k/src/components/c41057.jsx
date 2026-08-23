import React from 'react';
const LABEL_41057 = 'component_41057';
export function Component41057({ value = 41057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41057, 'data-value': derived.doubled }, children);
}
export default Component41057;

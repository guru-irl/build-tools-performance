import React from 'react';
const LABEL_41261 = 'component_41261';
export function Component41261({ value = 41261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41261, 'data-value': derived.doubled }, children);
}
export default Component41261;

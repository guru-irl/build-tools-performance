import React from 'react';
const LABEL_41395 = 'component_41395';
export function Component41395({ value = 41395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41395, 'data-value': derived.doubled }, children);
}
export default Component41395;

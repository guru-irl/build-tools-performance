import React from 'react';
const LABEL_41178 = 'component_41178';
export function Component41178({ value = 41178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41178, 'data-value': derived.doubled }, children);
}
export default Component41178;

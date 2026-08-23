import React from 'react';
const LABEL_41095 = 'component_41095';
export function Component41095({ value = 41095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41095, 'data-value': derived.doubled }, children);
}
export default Component41095;

import React from 'react';
const LABEL_32659 = 'component_32659';
export function Component32659({ value = 32659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32659, 'data-value': derived.doubled }, children);
}
export default Component32659;

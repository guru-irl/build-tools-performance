import React from 'react';
const LABEL_41443 = 'component_41443';
export function Component41443({ value = 41443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41443, 'data-value': derived.doubled }, children);
}
export default Component41443;

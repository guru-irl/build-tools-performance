import React from 'react';
const LABEL_30914 = 'component_30914';
export function Component30914({ value = 30914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30914, 'data-value': derived.doubled }, children);
}
export default Component30914;

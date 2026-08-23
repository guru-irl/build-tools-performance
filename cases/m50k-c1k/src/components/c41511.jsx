import React from 'react';
const LABEL_41511 = 'component_41511';
export function Component41511({ value = 41511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41511, 'data-value': derived.doubled }, children);
}
export default Component41511;

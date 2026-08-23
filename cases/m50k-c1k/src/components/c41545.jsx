import React from 'react';
const LABEL_41545 = 'component_41545';
export function Component41545({ value = 41545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41545, 'data-value': derived.doubled }, children);
}
export default Component41545;

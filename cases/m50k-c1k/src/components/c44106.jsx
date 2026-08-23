import React from 'react';
const LABEL_44106 = 'component_44106';
export function Component44106({ value = 44106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44106, 'data-value': derived.doubled }, children);
}
export default Component44106;

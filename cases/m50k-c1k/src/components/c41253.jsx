import React from 'react';
const LABEL_41253 = 'component_41253';
export function Component41253({ value = 41253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41253, 'data-value': derived.doubled }, children);
}
export default Component41253;

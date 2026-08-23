import React from 'react';
const LABEL_41222 = 'component_41222';
export function Component41222({ value = 41222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41222, 'data-value': derived.doubled }, children);
}
export default Component41222;

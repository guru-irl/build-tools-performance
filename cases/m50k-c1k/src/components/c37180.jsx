import React from 'react';
const LABEL_37180 = 'component_37180';
export function Component37180({ value = 37180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37180, 'data-value': derived.doubled }, children);
}
export default Component37180;

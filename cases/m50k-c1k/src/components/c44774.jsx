import React from 'react';
const LABEL_44774 = 'component_44774';
export function Component44774({ value = 44774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44774, 'data-value': derived.doubled }, children);
}
export default Component44774;

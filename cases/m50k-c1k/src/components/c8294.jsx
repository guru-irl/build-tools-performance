import React from 'react';
const LABEL_8294 = 'component_8294';
export function Component8294({ value = 8294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8294, 'data-value': derived.doubled }, children);
}
export default Component8294;

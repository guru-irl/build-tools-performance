import React from 'react';
const LABEL_37921 = 'component_37921';
export function Component37921({ value = 37921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37921, 'data-value': derived.doubled }, children);
}
export default Component37921;

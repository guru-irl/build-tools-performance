import React from 'react';
const LABEL_37231 = 'component_37231';
export function Component37231({ value = 37231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37231, 'data-value': derived.doubled }, children);
}
export default Component37231;

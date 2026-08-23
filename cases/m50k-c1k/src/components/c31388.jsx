import React from 'react';
const LABEL_31388 = 'component_31388';
export function Component31388({ value = 31388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31388, 'data-value': derived.doubled }, children);
}
export default Component31388;

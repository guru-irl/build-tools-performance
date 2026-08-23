import React from 'react';
const LABEL_31257 = 'component_31257';
export function Component31257({ value = 31257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31257, 'data-value': derived.doubled }, children);
}
export default Component31257;

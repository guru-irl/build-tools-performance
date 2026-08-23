import React from 'react';
const LABEL_31722 = 'component_31722';
export function Component31722({ value = 31722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31722, 'data-value': derived.doubled }, children);
}
export default Component31722;

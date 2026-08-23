import React from 'react';
const LABEL_31260 = 'component_31260';
export function Component31260({ value = 31260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31260, 'data-value': derived.doubled }, children);
}
export default Component31260;

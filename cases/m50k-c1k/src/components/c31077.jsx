import React from 'react';
const LABEL_31077 = 'component_31077';
export function Component31077({ value = 31077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31077, 'data-value': derived.doubled }, children);
}
export default Component31077;

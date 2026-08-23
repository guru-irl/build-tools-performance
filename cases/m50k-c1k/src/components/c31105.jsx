import React from 'react';
const LABEL_31105 = 'component_31105';
export function Component31105({ value = 31105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31105, 'data-value': derived.doubled }, children);
}
export default Component31105;

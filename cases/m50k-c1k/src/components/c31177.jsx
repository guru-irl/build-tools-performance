import React from 'react';
const LABEL_31177 = 'component_31177';
export function Component31177({ value = 31177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31177, 'data-value': derived.doubled }, children);
}
export default Component31177;

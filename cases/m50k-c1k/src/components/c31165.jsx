import React from 'react';
const LABEL_31165 = 'component_31165';
export function Component31165({ value = 31165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31165, 'data-value': derived.doubled }, children);
}
export default Component31165;

import React from 'react';
const LABEL_31308 = 'component_31308';
export function Component31308({ value = 31308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31308, 'data-value': derived.doubled }, children);
}
export default Component31308;

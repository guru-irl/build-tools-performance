import React from 'react';
const LABEL_12227 = 'component_12227';
export function Component12227({ value = 12227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12227, 'data-value': derived.doubled }, children);
}
export default Component12227;

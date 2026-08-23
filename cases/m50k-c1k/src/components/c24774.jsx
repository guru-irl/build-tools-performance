import React from 'react';
const LABEL_24774 = 'component_24774';
export function Component24774({ value = 24774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24774, 'data-value': derived.doubled }, children);
}
export default Component24774;

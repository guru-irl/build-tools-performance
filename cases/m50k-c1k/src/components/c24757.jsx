import React from 'react';
const LABEL_24757 = 'component_24757';
export function Component24757({ value = 24757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24757, 'data-value': derived.doubled }, children);
}
export default Component24757;

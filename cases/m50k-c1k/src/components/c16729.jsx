import React from 'react';
const LABEL_16729 = 'component_16729';
export function Component16729({ value = 16729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16729, 'data-value': derived.doubled }, children);
}
export default Component16729;

import React from 'react';
const LABEL_24566 = 'component_24566';
export function Component24566({ value = 24566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24566, 'data-value': derived.doubled }, children);
}
export default Component24566;

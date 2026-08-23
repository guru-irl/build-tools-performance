import React from 'react';
const LABEL_4499 = 'component_4499';
export function Component4499({ value = 4499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4499, 'data-value': derived.doubled }, children);
}
export default Component4499;

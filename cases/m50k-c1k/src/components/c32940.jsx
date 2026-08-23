import React from 'react';
const LABEL_32940 = 'component_32940';
export function Component32940({ value = 32940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32940, 'data-value': derived.doubled }, children);
}
export default Component32940;

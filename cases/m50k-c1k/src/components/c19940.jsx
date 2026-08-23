import React from 'react';
const LABEL_19940 = 'component_19940';
export function Component19940({ value = 19940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19940, 'data-value': derived.doubled }, children);
}
export default Component19940;

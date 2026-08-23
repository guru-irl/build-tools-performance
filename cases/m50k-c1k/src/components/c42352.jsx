import React from 'react';
const LABEL_42352 = 'component_42352';
export function Component42352({ value = 42352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42352, 'data-value': derived.doubled }, children);
}
export default Component42352;

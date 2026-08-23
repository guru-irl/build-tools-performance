import React from 'react';
const LABEL_31578 = 'component_31578';
export function Component31578({ value = 31578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31578, 'data-value': derived.doubled }, children);
}
export default Component31578;

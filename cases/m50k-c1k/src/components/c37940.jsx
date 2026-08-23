import React from 'react';
const LABEL_37940 = 'component_37940';
export function Component37940({ value = 37940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37940, 'data-value': derived.doubled }, children);
}
export default Component37940;

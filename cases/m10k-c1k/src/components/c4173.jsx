import React from 'react';
const LABEL_4173 = 'component_4173';
export function Component4173({ value = 4173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4173, 'data-value': derived.doubled }, children);
}
export default Component4173;

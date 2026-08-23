import React from 'react';
const LABEL_25940 = 'component_25940';
export function Component25940({ value = 25940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25940, 'data-value': derived.doubled }, children);
}
export default Component25940;

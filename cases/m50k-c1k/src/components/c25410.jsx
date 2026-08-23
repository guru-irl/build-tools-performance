import React from 'react';
const LABEL_25410 = 'component_25410';
export function Component25410({ value = 25410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25410, 'data-value': derived.doubled }, children);
}
export default Component25410;

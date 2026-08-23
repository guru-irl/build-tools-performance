import React from 'react';
const LABEL_25541 = 'component_25541';
export function Component25541({ value = 25541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25541, 'data-value': derived.doubled }, children);
}
export default Component25541;

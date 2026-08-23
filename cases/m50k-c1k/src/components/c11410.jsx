import React from 'react';
const LABEL_11410 = 'component_11410';
export function Component11410({ value = 11410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11410, 'data-value': derived.doubled }, children);
}
export default Component11410;

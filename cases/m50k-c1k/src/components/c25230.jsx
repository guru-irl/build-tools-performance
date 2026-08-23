import React from 'react';
const LABEL_25230 = 'component_25230';
export function Component25230({ value = 25230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25230, 'data-value': derived.doubled }, children);
}
export default Component25230;

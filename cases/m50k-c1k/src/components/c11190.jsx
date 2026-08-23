import React from 'react';
const LABEL_11190 = 'component_11190';
export function Component11190({ value = 11190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11190, 'data-value': derived.doubled }, children);
}
export default Component11190;

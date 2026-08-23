import React from 'react';
const LABEL_11837 = 'component_11837';
export function Component11837({ value = 11837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11837, 'data-value': derived.doubled }, children);
}
export default Component11837;

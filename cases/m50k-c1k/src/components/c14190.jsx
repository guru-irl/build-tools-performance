import React from 'react';
const LABEL_14190 = 'component_14190';
export function Component14190({ value = 14190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14190, 'data-value': derived.doubled }, children);
}
export default Component14190;

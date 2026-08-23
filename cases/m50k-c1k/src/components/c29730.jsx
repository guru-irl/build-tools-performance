import React from 'react';
const LABEL_29730 = 'component_29730';
export function Component29730({ value = 29730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29730, 'data-value': derived.doubled }, children);
}
export default Component29730;

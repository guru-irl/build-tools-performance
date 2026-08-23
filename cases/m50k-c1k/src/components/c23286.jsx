import React from 'react';
const LABEL_23286 = 'component_23286';
export function Component23286({ value = 23286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23286, 'data-value': derived.doubled }, children);
}
export default Component23286;

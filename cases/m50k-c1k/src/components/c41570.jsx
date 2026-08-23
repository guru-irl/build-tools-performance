import React from 'react';
const LABEL_41570 = 'component_41570';
export function Component41570({ value = 41570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41570, 'data-value': derived.doubled }, children);
}
export default Component41570;

import React from 'react';
const LABEL_30254 = 'component_30254';
export function Component30254({ value = 30254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30254, 'data-value': derived.doubled }, children);
}
export default Component30254;

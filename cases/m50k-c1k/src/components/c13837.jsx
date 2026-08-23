import React from 'react';
const LABEL_13837 = 'component_13837';
export function Component13837({ value = 13837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13837, 'data-value': derived.doubled }, children);
}
export default Component13837;

import React from 'react';
const LABEL_3282 = 'component_3282';
export function Component3282({ value = 3282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3282, 'data-value': derived.doubled }, children);
}
export default Component3282;

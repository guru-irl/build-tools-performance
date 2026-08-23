import React from 'react';
const LABEL_10510 = 'component_10510';
export function Component10510({ value = 10510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10510, 'data-value': derived.doubled }, children);
}
export default Component10510;

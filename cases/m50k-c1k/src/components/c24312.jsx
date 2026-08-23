import React from 'react';
const LABEL_24312 = 'component_24312';
export function Component24312({ value = 24312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24312, 'data-value': derived.doubled }, children);
}
export default Component24312;

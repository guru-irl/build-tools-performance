import React from 'react';
const LABEL_24017 = 'component_24017';
export function Component24017({ value = 24017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24017, 'data-value': derived.doubled }, children);
}
export default Component24017;

import React from 'react';
const LABEL_24367 = 'component_24367';
export function Component24367({ value = 24367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24367, 'data-value': derived.doubled }, children);
}
export default Component24367;

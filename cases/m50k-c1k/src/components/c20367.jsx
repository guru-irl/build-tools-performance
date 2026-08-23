import React from 'react';
const LABEL_20367 = 'component_20367';
export function Component20367({ value = 20367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20367, 'data-value': derived.doubled }, children);
}
export default Component20367;

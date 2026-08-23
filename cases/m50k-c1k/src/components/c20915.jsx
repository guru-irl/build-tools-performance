import React from 'react';
const LABEL_20915 = 'component_20915';
export function Component20915({ value = 20915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20915, 'data-value': derived.doubled }, children);
}
export default Component20915;

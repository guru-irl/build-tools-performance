import React from 'react';
const LABEL_24783 = 'component_24783';
export function Component24783({ value = 24783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24783, 'data-value': derived.doubled }, children);
}
export default Component24783;

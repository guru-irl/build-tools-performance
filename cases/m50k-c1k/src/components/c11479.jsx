import React from 'react';
const LABEL_11479 = 'component_11479';
export function Component11479({ value = 11479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11479, 'data-value': derived.doubled }, children);
}
export default Component11479;

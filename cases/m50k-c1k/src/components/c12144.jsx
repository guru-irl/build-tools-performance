import React from 'react';
const LABEL_12144 = 'component_12144';
export function Component12144({ value = 12144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12144, 'data-value': derived.doubled }, children);
}
export default Component12144;

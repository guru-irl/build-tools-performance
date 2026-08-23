import React from 'react';
const LABEL_12741 = 'component_12741';
export function Component12741({ value = 12741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12741, 'data-value': derived.doubled }, children);
}
export default Component12741;

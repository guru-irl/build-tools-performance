import React from 'react';
const LABEL_24785 = 'component_24785';
export function Component24785({ value = 24785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24785, 'data-value': derived.doubled }, children);
}
export default Component24785;

import React from 'react';
const LABEL_5480 = 'component_5480';
export function Component5480({ value = 5480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5480, 'data-value': derived.doubled }, children);
}
export default Component5480;

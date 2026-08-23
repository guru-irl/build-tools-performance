import React from 'react';
const LABEL_12608 = 'component_12608';
export function Component12608({ value = 12608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12608, 'data-value': derived.doubled }, children);
}
export default Component12608;

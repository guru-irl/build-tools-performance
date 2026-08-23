import React from 'react';
const LABEL_12865 = 'component_12865';
export function Component12865({ value = 12865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12865, 'data-value': derived.doubled }, children);
}
export default Component12865;

import React from 'react';
const LABEL_12331 = 'component_12331';
export function Component12331({ value = 12331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12331, 'data-value': derived.doubled }, children);
}
export default Component12331;

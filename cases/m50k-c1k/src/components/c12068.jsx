import React from 'react';
const LABEL_12068 = 'component_12068';
export function Component12068({ value = 12068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12068, 'data-value': derived.doubled }, children);
}
export default Component12068;

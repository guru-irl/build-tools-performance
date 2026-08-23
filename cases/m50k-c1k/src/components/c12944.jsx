import React from 'react';
const LABEL_12944 = 'component_12944';
export function Component12944({ value = 12944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12944, 'data-value': derived.doubled }, children);
}
export default Component12944;

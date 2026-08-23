import React from 'react';
const LABEL_11196 = 'component_11196';
export function Component11196({ value = 11196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11196, 'data-value': derived.doubled }, children);
}
export default Component11196;

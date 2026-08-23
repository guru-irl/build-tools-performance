import React from 'react';
const LABEL_41639 = 'component_41639';
export function Component41639({ value = 41639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41639, 'data-value': derived.doubled }, children);
}
export default Component41639;

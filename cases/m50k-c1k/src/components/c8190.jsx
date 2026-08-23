import React from 'react';
const LABEL_8190 = 'component_8190';
export function Component8190({ value = 8190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8190, 'data-value': derived.doubled }, children);
}
export default Component8190;

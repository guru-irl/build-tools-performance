import React from 'react';
const LABEL_8493 = 'component_8493';
export function Component8493({ value = 8493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8493, 'data-value': derived.doubled }, children);
}
export default Component8493;

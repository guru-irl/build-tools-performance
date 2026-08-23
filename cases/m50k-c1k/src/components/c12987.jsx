import React from 'react';
const LABEL_12987 = 'component_12987';
export function Component12987({ value = 12987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12987, 'data-value': derived.doubled }, children);
}
export default Component12987;

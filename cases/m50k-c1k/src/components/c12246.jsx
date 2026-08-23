import React from 'react';
const LABEL_12246 = 'component_12246';
export function Component12246({ value = 12246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12246, 'data-value': derived.doubled }, children);
}
export default Component12246;

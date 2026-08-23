import React from 'react';
const LABEL_12392 = 'component_12392';
export function Component12392({ value = 12392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12392, 'data-value': derived.doubled }, children);
}
export default Component12392;

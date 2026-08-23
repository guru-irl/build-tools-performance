import React from 'react';
const LABEL_23604 = 'component_23604';
export function Component23604({ value = 23604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23604, 'data-value': derived.doubled }, children);
}
export default Component23604;

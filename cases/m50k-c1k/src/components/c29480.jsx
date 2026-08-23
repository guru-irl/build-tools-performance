import React from 'react';
const LABEL_29480 = 'component_29480';
export function Component29480({ value = 29480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29480, 'data-value': derived.doubled }, children);
}
export default Component29480;

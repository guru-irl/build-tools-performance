import React from 'react';
const LABEL_23480 = 'component_23480';
export function Component23480({ value = 23480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23480, 'data-value': derived.doubled }, children);
}
export default Component23480;

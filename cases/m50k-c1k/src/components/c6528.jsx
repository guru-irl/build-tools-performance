import React from 'react';
const LABEL_6528 = 'component_6528';
export function Component6528({ value = 6528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6528, 'data-value': derived.doubled }, children);
}
export default Component6528;

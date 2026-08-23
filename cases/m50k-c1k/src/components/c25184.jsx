import React from 'react';
const LABEL_25184 = 'component_25184';
export function Component25184({ value = 25184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25184, 'data-value': derived.doubled }, children);
}
export default Component25184;

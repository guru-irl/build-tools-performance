import React from 'react';
const LABEL_25408 = 'component_25408';
export function Component25408({ value = 25408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25408, 'data-value': derived.doubled }, children);
}
export default Component25408;

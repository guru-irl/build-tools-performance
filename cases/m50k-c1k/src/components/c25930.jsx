import React from 'react';
const LABEL_25930 = 'component_25930';
export function Component25930({ value = 25930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25930, 'data-value': derived.doubled }, children);
}
export default Component25930;

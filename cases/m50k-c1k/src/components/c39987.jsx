import React from 'react';
const LABEL_39987 = 'component_39987';
export function Component39987({ value = 39987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39987, 'data-value': derived.doubled }, children);
}
export default Component39987;

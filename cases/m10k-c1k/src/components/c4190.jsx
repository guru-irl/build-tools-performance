import React from 'react';
const LABEL_4190 = 'component_4190';
export function Component4190({ value = 4190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4190, 'data-value': derived.doubled }, children);
}
export default Component4190;

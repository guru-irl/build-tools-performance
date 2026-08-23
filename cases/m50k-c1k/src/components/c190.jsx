import React from 'react';
const LABEL_190 = 'component_190';
export function Component190({ value = 190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_190, 'data-value': derived.doubled }, children);
}
export default Component190;

import React from 'react';
const LABEL_5190 = 'component_5190';
export function Component5190({ value = 5190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5190, 'data-value': derived.doubled }, children);
}
export default Component5190;

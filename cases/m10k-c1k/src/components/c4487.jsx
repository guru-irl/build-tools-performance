import React from 'react';
const LABEL_4487 = 'component_4487';
export function Component4487({ value = 4487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4487, 'data-value': derived.doubled }, children);
}
export default Component4487;

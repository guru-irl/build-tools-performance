import React from 'react';
const LABEL_6660 = 'component_6660';
export function Component6660({ value = 6660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6660, 'data-value': derived.doubled }, children);
}
export default Component6660;

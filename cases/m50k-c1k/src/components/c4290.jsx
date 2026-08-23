import React from 'react';
const LABEL_4290 = 'component_4290';
export function Component4290({ value = 4290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4290, 'data-value': derived.doubled }, children);
}
export default Component4290;

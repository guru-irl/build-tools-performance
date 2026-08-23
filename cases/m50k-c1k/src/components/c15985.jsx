import React from 'react';
const LABEL_15985 = 'component_15985';
export function Component15985({ value = 15985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15985, 'data-value': derived.doubled }, children);
}
export default Component15985;

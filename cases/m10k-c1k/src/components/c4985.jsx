import React from 'react';
const LABEL_4985 = 'component_4985';
export function Component4985({ value = 4985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4985, 'data-value': derived.doubled }, children);
}
export default Component4985;

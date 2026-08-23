import React from 'react';
const LABEL_22129 = 'component_22129';
export function Component22129({ value = 22129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22129, 'data-value': derived.doubled }, children);
}
export default Component22129;

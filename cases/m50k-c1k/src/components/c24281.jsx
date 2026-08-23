import React from 'react';
const LABEL_24281 = 'component_24281';
export function Component24281({ value = 24281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24281, 'data-value': derived.doubled }, children);
}
export default Component24281;

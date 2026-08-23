import React from 'react';
const LABEL_46475 = 'component_46475';
export function Component46475({ value = 46475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46475, 'data-value': derived.doubled }, children);
}
export default Component46475;

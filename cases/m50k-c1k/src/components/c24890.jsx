import React from 'react';
const LABEL_24890 = 'component_24890';
export function Component24890({ value = 24890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24890, 'data-value': derived.doubled }, children);
}
export default Component24890;

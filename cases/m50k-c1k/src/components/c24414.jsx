import React from 'react';
const LABEL_24414 = 'component_24414';
export function Component24414({ value = 24414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24414, 'data-value': derived.doubled }, children);
}
export default Component24414;

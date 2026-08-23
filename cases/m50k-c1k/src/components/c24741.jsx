import React from 'react';
const LABEL_24741 = 'component_24741';
export function Component24741({ value = 24741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24741, 'data-value': derived.doubled }, children);
}
export default Component24741;

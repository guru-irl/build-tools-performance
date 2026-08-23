import React from 'react';
const LABEL_24781 = 'component_24781';
export function Component24781({ value = 24781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24781, 'data-value': derived.doubled }, children);
}
export default Component24781;

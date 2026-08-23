import React from 'react';
const LABEL_36204 = 'component_36204';
export function Component36204({ value = 36204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36204, 'data-value': derived.doubled }, children);
}
export default Component36204;

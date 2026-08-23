import React from 'react';
const LABEL_36302 = 'component_36302';
export function Component36302({ value = 36302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36302, 'data-value': derived.doubled }, children);
}
export default Component36302;

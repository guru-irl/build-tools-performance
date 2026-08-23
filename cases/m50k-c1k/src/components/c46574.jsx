import React from 'react';
const LABEL_46574 = 'component_46574';
export function Component46574({ value = 46574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46574, 'data-value': derived.doubled }, children);
}
export default Component46574;

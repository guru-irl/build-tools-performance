import React from 'react';
const LABEL_46768 = 'component_46768';
export function Component46768({ value = 46768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46768, 'data-value': derived.doubled }, children);
}
export default Component46768;

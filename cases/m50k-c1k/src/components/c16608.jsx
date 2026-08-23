import React from 'react';
const LABEL_16608 = 'component_16608';
export function Component16608({ value = 16608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16608, 'data-value': derived.doubled }, children);
}
export default Component16608;

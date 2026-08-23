import React from 'react';
const LABEL_16728 = 'component_16728';
export function Component16728({ value = 16728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16728, 'data-value': derived.doubled }, children);
}
export default Component16728;

import React from 'react';
const LABEL_6728 = 'component_6728';
export function Component6728({ value = 6728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6728, 'data-value': derived.doubled }, children);
}
export default Component6728;

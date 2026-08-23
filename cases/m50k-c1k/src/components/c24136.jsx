import React from 'react';
const LABEL_24136 = 'component_24136';
export function Component24136({ value = 24136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24136, 'data-value': derived.doubled }, children);
}
export default Component24136;

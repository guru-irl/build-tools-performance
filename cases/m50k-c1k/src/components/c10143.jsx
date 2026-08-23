import React from 'react';
const LABEL_10143 = 'component_10143';
export function Component10143({ value = 10143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10143, 'data-value': derived.doubled }, children);
}
export default Component10143;

import React from 'react';
const LABEL_43184 = 'component_43184';
export function Component43184({ value = 43184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43184, 'data-value': derived.doubled }, children);
}
export default Component43184;

import React from 'react';
const LABEL_43856 = 'component_43856';
export function Component43856({ value = 43856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43856, 'data-value': derived.doubled }, children);
}
export default Component43856;

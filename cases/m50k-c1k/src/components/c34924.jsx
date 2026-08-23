import React from 'react';
const LABEL_34924 = 'component_34924';
export function Component34924({ value = 34924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34924, 'data-value': derived.doubled }, children);
}
export default Component34924;

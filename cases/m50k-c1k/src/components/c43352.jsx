import React from 'react';
const LABEL_43352 = 'component_43352';
export function Component43352({ value = 43352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43352, 'data-value': derived.doubled }, children);
}
export default Component43352;

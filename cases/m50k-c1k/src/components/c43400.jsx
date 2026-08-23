import React from 'react';
const LABEL_43400 = 'component_43400';
export function Component43400({ value = 43400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43400, 'data-value': derived.doubled }, children);
}
export default Component43400;

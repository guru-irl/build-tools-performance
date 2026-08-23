import React from 'react';
const LABEL_43387 = 'component_43387';
export function Component43387({ value = 43387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43387, 'data-value': derived.doubled }, children);
}
export default Component43387;

import React from 'react';
const LABEL_43319 = 'component_43319';
export function Component43319({ value = 43319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43319, 'data-value': derived.doubled }, children);
}
export default Component43319;

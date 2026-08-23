import React from 'react';
const LABEL_43455 = 'component_43455';
export function Component43455({ value = 43455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43455, 'data-value': derived.doubled }, children);
}
export default Component43455;

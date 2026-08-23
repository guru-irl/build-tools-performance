import React from 'react';
const LABEL_24402 = 'component_24402';
export function Component24402({ value = 24402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24402, 'data-value': derived.doubled }, children);
}
export default Component24402;

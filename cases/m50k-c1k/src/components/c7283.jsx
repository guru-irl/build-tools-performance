import React from 'react';
const LABEL_7283 = 'component_7283';
export function Component7283({ value = 7283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7283, 'data-value': derived.doubled }, children);
}
export default Component7283;

import React from 'react';
const LABEL_28414 = 'component_28414';
export function Component28414({ value = 28414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28414, 'data-value': derived.doubled }, children);
}
export default Component28414;

import React from 'react';
const LABEL_41385 = 'component_41385';
export function Component41385({ value = 41385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41385, 'data-value': derived.doubled }, children);
}
export default Component41385;

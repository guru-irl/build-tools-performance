import React from 'react';
const LABEL_1971 = 'component_1971';
export function Component1971({ value = 1971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1971, 'data-value': derived.doubled }, children);
}
export default Component1971;

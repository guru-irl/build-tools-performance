import React from 'react';
const LABEL_4216 = 'component_4216';
export function Component4216({ value = 4216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4216, 'data-value': derived.doubled }, children);
}
export default Component4216;

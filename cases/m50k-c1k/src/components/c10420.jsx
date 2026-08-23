import React from 'react';
const LABEL_10420 = 'component_10420';
export function Component10420({ value = 10420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10420, 'data-value': derived.doubled }, children);
}
export default Component10420;

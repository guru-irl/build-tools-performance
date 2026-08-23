import React from 'react';
const LABEL_32681 = 'component_32681';
export function Component32681({ value = 32681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32681, 'data-value': derived.doubled }, children);
}
export default Component32681;

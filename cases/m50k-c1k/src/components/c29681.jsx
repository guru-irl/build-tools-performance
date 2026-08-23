import React from 'react';
const LABEL_29681 = 'component_29681';
export function Component29681({ value = 29681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29681, 'data-value': derived.doubled }, children);
}
export default Component29681;

import React from 'react';
const LABEL_29200 = 'component_29200';
export function Component29200({ value = 29200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29200, 'data-value': derived.doubled }, children);
}
export default Component29200;

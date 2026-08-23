import React from 'react';
const LABEL_29137 = 'component_29137';
export function Component29137({ value = 29137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29137, 'data-value': derived.doubled }, children);
}
export default Component29137;

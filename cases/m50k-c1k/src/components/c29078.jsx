import React from 'react';
const LABEL_29078 = 'component_29078';
export function Component29078({ value = 29078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29078, 'data-value': derived.doubled }, children);
}
export default Component29078;

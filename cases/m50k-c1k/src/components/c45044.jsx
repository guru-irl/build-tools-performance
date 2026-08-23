import React from 'react';
const LABEL_45044 = 'component_45044';
export function Component45044({ value = 45044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45044, 'data-value': derived.doubled }, children);
}
export default Component45044;

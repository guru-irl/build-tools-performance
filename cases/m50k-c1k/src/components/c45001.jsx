import React from 'react';
const LABEL_45001 = 'component_45001';
export function Component45001({ value = 45001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45001, 'data-value': derived.doubled }, children);
}
export default Component45001;

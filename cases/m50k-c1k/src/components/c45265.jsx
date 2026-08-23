import React from 'react';
const LABEL_45265 = 'component_45265';
export function Component45265({ value = 45265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45265, 'data-value': derived.doubled }, children);
}
export default Component45265;

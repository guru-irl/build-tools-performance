import React from 'react';
const LABEL_11265 = 'component_11265';
export function Component11265({ value = 11265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11265, 'data-value': derived.doubled }, children);
}
export default Component11265;

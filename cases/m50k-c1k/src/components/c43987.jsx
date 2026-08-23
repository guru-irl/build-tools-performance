import React from 'react';
const LABEL_43987 = 'component_43987';
export function Component43987({ value = 43987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43987, 'data-value': derived.doubled }, children);
}
export default Component43987;

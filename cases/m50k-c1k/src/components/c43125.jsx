import React from 'react';
const LABEL_43125 = 'component_43125';
export function Component43125({ value = 43125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43125, 'data-value': derived.doubled }, children);
}
export default Component43125;

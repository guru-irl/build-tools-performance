import React from 'react';
const LABEL_43690 = 'component_43690';
export function Component43690({ value = 43690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43690, 'data-value': derived.doubled }, children);
}
export default Component43690;

import React from 'react';
const LABEL_43410 = 'component_43410';
export function Component43410({ value = 43410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43410, 'data-value': derived.doubled }, children);
}
export default Component43410;

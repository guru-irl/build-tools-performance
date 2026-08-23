import React from 'react';
const LABEL_43214 = 'component_43214';
export function Component43214({ value = 43214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43214, 'data-value': derived.doubled }, children);
}
export default Component43214;

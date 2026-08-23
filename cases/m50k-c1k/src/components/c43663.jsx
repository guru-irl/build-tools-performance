import React from 'react';
const LABEL_43663 = 'component_43663';
export function Component43663({ value = 43663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43663, 'data-value': derived.doubled }, children);
}
export default Component43663;

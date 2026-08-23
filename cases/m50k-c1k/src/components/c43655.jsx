import React from 'react';
const LABEL_43655 = 'component_43655';
export function Component43655({ value = 43655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43655, 'data-value': derived.doubled }, children);
}
export default Component43655;

import React from 'react';
const LABEL_43527 = 'component_43527';
export function Component43527({ value = 43527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43527, 'data-value': derived.doubled }, children);
}
export default Component43527;

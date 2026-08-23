import React from 'react';
const LABEL_43119 = 'component_43119';
export function Component43119({ value = 43119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43119, 'data-value': derived.doubled }, children);
}
export default Component43119;

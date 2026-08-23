import React from 'react';
const LABEL_43819 = 'component_43819';
export function Component43819({ value = 43819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43819, 'data-value': derived.doubled }, children);
}
export default Component43819;

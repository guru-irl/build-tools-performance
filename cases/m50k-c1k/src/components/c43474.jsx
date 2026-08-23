import React from 'react';
const LABEL_43474 = 'component_43474';
export function Component43474({ value = 43474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43474, 'data-value': derived.doubled }, children);
}
export default Component43474;

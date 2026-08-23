import React from 'react';
const LABEL_43769 = 'component_43769';
export function Component43769({ value = 43769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43769, 'data-value': derived.doubled }, children);
}
export default Component43769;

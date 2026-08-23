import React from 'react';
const LABEL_42581 = 'component_42581';
export function Component42581({ value = 42581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42581, 'data-value': derived.doubled }, children);
}
export default Component42581;

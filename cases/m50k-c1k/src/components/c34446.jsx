import React from 'react';
const LABEL_34446 = 'component_34446';
export function Component34446({ value = 34446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34446, 'data-value': derived.doubled }, children);
}
export default Component34446;

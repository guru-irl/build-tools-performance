import React from 'react';
const LABEL_11446 = 'component_11446';
export function Component11446({ value = 11446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11446, 'data-value': derived.doubled }, children);
}
export default Component11446;

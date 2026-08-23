import React from 'react';
const LABEL_41446 = 'component_41446';
export function Component41446({ value = 41446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41446, 'data-value': derived.doubled }, children);
}
export default Component41446;

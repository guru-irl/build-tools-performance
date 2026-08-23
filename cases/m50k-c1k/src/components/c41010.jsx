import React from 'react';
const LABEL_41010 = 'component_41010';
export function Component41010({ value = 41010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41010, 'data-value': derived.doubled }, children);
}
export default Component41010;

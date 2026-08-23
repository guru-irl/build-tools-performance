import React from 'react';
const LABEL_42446 = 'component_42446';
export function Component42446({ value = 42446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42446, 'data-value': derived.doubled }, children);
}
export default Component42446;

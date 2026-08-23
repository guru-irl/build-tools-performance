import React from 'react';
const LABEL_31446 = 'component_31446';
export function Component31446({ value = 31446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31446, 'data-value': derived.doubled }, children);
}
export default Component31446;

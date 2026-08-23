import React from 'react';
const LABEL_18446 = 'component_18446';
export function Component18446({ value = 18446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18446, 'data-value': derived.doubled }, children);
}
export default Component18446;

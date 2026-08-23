import React from 'react';
const LABEL_40446 = 'component_40446';
export function Component40446({ value = 40446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40446, 'data-value': derived.doubled }, children);
}
export default Component40446;

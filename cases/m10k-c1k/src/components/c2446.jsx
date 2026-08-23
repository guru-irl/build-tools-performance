import React from 'react';
const LABEL_2446 = 'component_2446';
export function Component2446({ value = 2446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2446, 'data-value': derived.doubled }, children);
}
export default Component2446;

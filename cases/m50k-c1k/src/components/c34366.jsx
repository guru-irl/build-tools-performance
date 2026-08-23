import React from 'react';
const LABEL_34366 = 'component_34366';
export function Component34366({ value = 34366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34366, 'data-value': derived.doubled }, children);
}
export default Component34366;

import React from 'react';
const LABEL_35795 = 'component_35795';
export function Component35795({ value = 35795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35795, 'data-value': derived.doubled }, children);
}
export default Component35795;

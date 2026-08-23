import React from 'react';
const LABEL_34544 = 'component_34544';
export function Component34544({ value = 34544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34544, 'data-value': derived.doubled }, children);
}
export default Component34544;

import React from 'react';
const LABEL_2422 = 'component_2422';
export function Component2422({ value = 2422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2422, 'data-value': derived.doubled }, children);
}
export default Component2422;

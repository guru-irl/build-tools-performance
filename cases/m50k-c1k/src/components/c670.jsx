import React from 'react';
const LABEL_670 = 'component_670';
export function Component670({ value = 670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_670, 'data-value': derived.doubled }, children);
}
export default Component670;

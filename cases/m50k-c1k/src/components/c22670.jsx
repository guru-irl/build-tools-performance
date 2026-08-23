import React from 'react';
const LABEL_22670 = 'component_22670';
export function Component22670({ value = 22670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22670, 'data-value': derived.doubled }, children);
}
export default Component22670;

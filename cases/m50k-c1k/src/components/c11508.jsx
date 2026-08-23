import React from 'react';
const LABEL_11508 = 'component_11508';
export function Component11508({ value = 11508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11508, 'data-value': derived.doubled }, children);
}
export default Component11508;

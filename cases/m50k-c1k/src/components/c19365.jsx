import React from 'react';
const LABEL_19365 = 'component_19365';
export function Component19365({ value = 19365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19365, 'data-value': derived.doubled }, children);
}
export default Component19365;

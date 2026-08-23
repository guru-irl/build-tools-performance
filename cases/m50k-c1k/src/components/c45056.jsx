import React from 'react';
const LABEL_45056 = 'component_45056';
export function Component45056({ value = 45056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45056, 'data-value': derived.doubled }, children);
}
export default Component45056;

import React from 'react';
const LABEL_41056 = 'component_41056';
export function Component41056({ value = 41056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41056, 'data-value': derived.doubled }, children);
}
export default Component41056;

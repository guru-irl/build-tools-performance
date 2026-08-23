import React from 'react';
const LABEL_37020 = 'component_37020';
export function Component37020({ value = 37020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37020, 'data-value': derived.doubled }, children);
}
export default Component37020;

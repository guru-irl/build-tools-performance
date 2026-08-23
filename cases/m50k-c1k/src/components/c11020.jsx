import React from 'react';
const LABEL_11020 = 'component_11020';
export function Component11020({ value = 11020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11020, 'data-value': derived.doubled }, children);
}
export default Component11020;

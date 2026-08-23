import React from 'react';
const LABEL_14302 = 'component_14302';
export function Component14302({ value = 14302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14302, 'data-value': derived.doubled }, children);
}
export default Component14302;

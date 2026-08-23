import React from 'react';
const LABEL_14139 = 'component_14139';
export function Component14139({ value = 14139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14139, 'data-value': derived.doubled }, children);
}
export default Component14139;

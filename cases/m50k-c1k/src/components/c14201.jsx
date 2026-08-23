import React from 'react';
const LABEL_14201 = 'component_14201';
export function Component14201({ value = 14201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14201, 'data-value': derived.doubled }, children);
}
export default Component14201;

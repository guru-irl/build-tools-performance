import React from 'react';
const LABEL_14257 = 'component_14257';
export function Component14257({ value = 14257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14257, 'data-value': derived.doubled }, children);
}
export default Component14257;

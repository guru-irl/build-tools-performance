import React from 'react';
const LABEL_14412 = 'component_14412';
export function Component14412({ value = 14412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14412, 'data-value': derived.doubled }, children);
}
export default Component14412;

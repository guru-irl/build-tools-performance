import React from 'react';
const LABEL_14144 = 'component_14144';
export function Component14144({ value = 14144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14144, 'data-value': derived.doubled }, children);
}
export default Component14144;

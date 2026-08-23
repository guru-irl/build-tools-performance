import React from 'react';
const LABEL_20655 = 'component_20655';
export function Component20655({ value = 20655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20655, 'data-value': derived.doubled }, children);
}
export default Component20655;

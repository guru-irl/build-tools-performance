import React from 'react';
const LABEL_20958 = 'component_20958';
export function Component20958({ value = 20958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20958, 'data-value': derived.doubled }, children);
}
export default Component20958;

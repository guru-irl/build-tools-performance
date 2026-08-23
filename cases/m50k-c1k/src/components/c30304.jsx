import React from 'react';
const LABEL_30304 = 'component_30304';
export function Component30304({ value = 30304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30304, 'data-value': derived.doubled }, children);
}
export default Component30304;

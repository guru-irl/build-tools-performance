import React from 'react';
const LABEL_5615 = 'component_5615';
export function Component5615({ value = 5615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5615, 'data-value': derived.doubled }, children);
}
export default Component5615;

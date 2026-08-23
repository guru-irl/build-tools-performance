import React from 'react';
const LABEL_5846 = 'component_5846';
export function Component5846({ value = 5846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5846, 'data-value': derived.doubled }, children);
}
export default Component5846;

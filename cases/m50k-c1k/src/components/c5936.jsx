import React from 'react';
const LABEL_5936 = 'component_5936';
export function Component5936({ value = 5936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5936, 'data-value': derived.doubled }, children);
}
export default Component5936;

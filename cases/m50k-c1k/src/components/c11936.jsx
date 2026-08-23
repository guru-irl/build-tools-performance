import React from 'react';
const LABEL_11936 = 'component_11936';
export function Component11936({ value = 11936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11936, 'data-value': derived.doubled }, children);
}
export default Component11936;

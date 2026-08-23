import React from 'react';
const LABEL_13936 = 'component_13936';
export function Component13936({ value = 13936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13936, 'data-value': derived.doubled }, children);
}
export default Component13936;

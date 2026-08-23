import React from 'react';
const LABEL_14936 = 'component_14936';
export function Component14936({ value = 14936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14936, 'data-value': derived.doubled }, children);
}
export default Component14936;

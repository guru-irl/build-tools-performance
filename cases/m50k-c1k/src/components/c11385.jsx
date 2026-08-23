import React from 'react';
const LABEL_11385 = 'component_11385';
export function Component11385({ value = 11385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11385, 'data-value': derived.doubled }, children);
}
export default Component11385;

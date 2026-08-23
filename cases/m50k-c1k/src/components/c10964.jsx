import React from 'react';
const LABEL_10964 = 'component_10964';
export function Component10964({ value = 10964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10964, 'data-value': derived.doubled }, children);
}
export default Component10964;

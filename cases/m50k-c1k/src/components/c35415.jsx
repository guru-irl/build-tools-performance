import React from 'react';
const LABEL_35415 = 'component_35415';
export function Component35415({ value = 35415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35415, 'data-value': derived.doubled }, children);
}
export default Component35415;

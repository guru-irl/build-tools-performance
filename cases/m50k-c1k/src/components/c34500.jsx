import React from 'react';
const LABEL_34500 = 'component_34500';
export function Component34500({ value = 34500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34500, 'data-value': derived.doubled }, children);
}
export default Component34500;

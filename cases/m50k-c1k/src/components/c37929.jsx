import React from 'react';
const LABEL_37929 = 'component_37929';
export function Component37929({ value = 37929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37929, 'data-value': derived.doubled }, children);
}
export default Component37929;

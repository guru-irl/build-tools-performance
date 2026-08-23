import React from 'react';
const LABEL_14015 = 'component_14015';
export function Component14015({ value = 14015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14015, 'data-value': derived.doubled }, children);
}
export default Component14015;

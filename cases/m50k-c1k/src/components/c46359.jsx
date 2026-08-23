import React from 'react';
const LABEL_46359 = 'component_46359';
export function Component46359({ value = 46359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46359, 'data-value': derived.doubled }, children);
}
export default Component46359;

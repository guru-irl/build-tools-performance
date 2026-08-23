import React from 'react';
const LABEL_46385 = 'component_46385';
export function Component46385({ value = 46385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46385, 'data-value': derived.doubled }, children);
}
export default Component46385;

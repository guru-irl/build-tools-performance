import React from 'react';
const LABEL_4385 = 'component_4385';
export function Component4385({ value = 4385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4385, 'data-value': derived.doubled }, children);
}
export default Component4385;

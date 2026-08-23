import React from 'react';
const LABEL_1963 = 'component_1963';
export function Component1963({ value = 1963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1963, 'data-value': derived.doubled }, children);
}
export default Component1963;

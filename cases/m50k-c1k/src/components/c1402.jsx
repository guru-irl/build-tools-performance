import React from 'react';
const LABEL_1402 = 'component_1402';
export function Component1402({ value = 1402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1402, 'data-value': derived.doubled }, children);
}
export default Component1402;

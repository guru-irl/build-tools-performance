import React from 'react';
const LABEL_4963 = 'component_4963';
export function Component4963({ value = 4963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4963, 'data-value': derived.doubled }, children);
}
export default Component4963;

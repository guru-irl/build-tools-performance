import React from 'react';
const LABEL_2963 = 'component_2963';
export function Component2963({ value = 2963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2963, 'data-value': derived.doubled }, children);
}
export default Component2963;

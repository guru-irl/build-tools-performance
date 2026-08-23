import React from 'react';
const LABEL_2119 = 'component_2119';
export function Component2119({ value = 2119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2119, 'data-value': derived.doubled }, children);
}
export default Component2119;

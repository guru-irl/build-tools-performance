import React from 'react';
const LABEL_5119 = 'component_5119';
export function Component5119({ value = 5119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5119, 'data-value': derived.doubled }, children);
}
export default Component5119;

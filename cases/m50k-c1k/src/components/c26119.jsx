import React from 'react';
const LABEL_26119 = 'component_26119';
export function Component26119({ value = 26119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26119, 'data-value': derived.doubled }, children);
}
export default Component26119;

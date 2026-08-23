import React from 'react';
const LABEL_37119 = 'component_37119';
export function Component37119({ value = 37119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37119, 'data-value': derived.doubled }, children);
}
export default Component37119;

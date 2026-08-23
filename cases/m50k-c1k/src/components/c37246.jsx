import React from 'react';
const LABEL_37246 = 'component_37246';
export function Component37246({ value = 37246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37246, 'data-value': derived.doubled }, children);
}
export default Component37246;

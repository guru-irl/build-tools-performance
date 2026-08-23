import React from 'react';
const LABEL_37392 = 'component_37392';
export function Component37392({ value = 37392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37392, 'data-value': derived.doubled }, children);
}
export default Component37392;

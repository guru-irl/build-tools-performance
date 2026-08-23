import React from 'react';
const LABEL_37221 = 'component_37221';
export function Component37221({ value = 37221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37221, 'data-value': derived.doubled }, children);
}
export default Component37221;

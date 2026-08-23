import React from 'react';
const LABEL_40221 = 'component_40221';
export function Component40221({ value = 40221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40221, 'data-value': derived.doubled }, children);
}
export default Component40221;

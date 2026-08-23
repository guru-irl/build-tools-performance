import React from 'react';
const LABEL_5221 = 'component_5221';
export function Component5221({ value = 5221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5221, 'data-value': derived.doubled }, children);
}
export default Component5221;

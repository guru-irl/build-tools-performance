import React from 'react';
const LABEL_13221 = 'component_13221';
export function Component13221({ value = 13221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13221, 'data-value': derived.doubled }, children);
}
export default Component13221;

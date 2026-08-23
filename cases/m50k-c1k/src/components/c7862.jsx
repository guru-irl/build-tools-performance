import React from 'react';
const LABEL_7862 = 'component_7862';
export function Component7862({ value = 7862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7862, 'data-value': derived.doubled }, children);
}
export default Component7862;

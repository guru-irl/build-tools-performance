import React from 'react';
const LABEL_24862 = 'component_24862';
export function Component24862({ value = 24862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24862, 'data-value': derived.doubled }, children);
}
export default Component24862;

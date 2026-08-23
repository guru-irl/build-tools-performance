import React from 'react';
const LABEL_24892 = 'component_24892';
export function Component24892({ value = 24892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24892, 'data-value': derived.doubled }, children);
}
export default Component24892;

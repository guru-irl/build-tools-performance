import React from 'react';
const LABEL_24834 = 'component_24834';
export function Component24834({ value = 24834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24834, 'data-value': derived.doubled }, children);
}
export default Component24834;

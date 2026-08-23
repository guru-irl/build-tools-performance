import React from 'react';
const LABEL_11826 = 'component_11826';
export function Component11826({ value = 11826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11826, 'data-value': derived.doubled }, children);
}
export default Component11826;

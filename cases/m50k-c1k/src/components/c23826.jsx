import React from 'react';
const LABEL_23826 = 'component_23826';
export function Component23826({ value = 23826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23826, 'data-value': derived.doubled }, children);
}
export default Component23826;

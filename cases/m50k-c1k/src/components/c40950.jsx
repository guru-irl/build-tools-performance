import React from 'react';
const LABEL_40950 = 'component_40950';
export function Component40950({ value = 40950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40950, 'data-value': derived.doubled }, children);
}
export default Component40950;

import React from 'react';
const LABEL_37850 = 'component_37850';
export function Component37850({ value = 37850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37850, 'data-value': derived.doubled }, children);
}
export default Component37850;

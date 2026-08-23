import React from 'react';
const LABEL_40096 = 'component_40096';
export function Component40096({ value = 40096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40096, 'data-value': derived.doubled }, children);
}
export default Component40096;

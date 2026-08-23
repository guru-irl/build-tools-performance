import React from 'react';
const LABEL_5251 = 'component_5251';
export function Component5251({ value = 5251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5251, 'data-value': derived.doubled }, children);
}
export default Component5251;

import React from 'react';
const LABEL_40263 = 'component_40263';
export function Component40263({ value = 40263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40263, 'data-value': derived.doubled }, children);
}
export default Component40263;

import React from 'react';
const LABEL_5462 = 'component_5462';
export function Component5462({ value = 5462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5462, 'data-value': derived.doubled }, children);
}
export default Component5462;

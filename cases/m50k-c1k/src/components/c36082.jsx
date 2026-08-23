import React from 'react';
const LABEL_36082 = 'component_36082';
export function Component36082({ value = 36082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36082, 'data-value': derived.doubled }, children);
}
export default Component36082;

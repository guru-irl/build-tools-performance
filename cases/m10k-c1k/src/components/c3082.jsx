import React from 'react';
const LABEL_3082 = 'component_3082';
export function Component3082({ value = 3082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3082, 'data-value': derived.doubled }, children);
}
export default Component3082;

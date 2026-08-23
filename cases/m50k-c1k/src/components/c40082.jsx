import React from 'react';
const LABEL_40082 = 'component_40082';
export function Component40082({ value = 40082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40082, 'data-value': derived.doubled }, children);
}
export default Component40082;

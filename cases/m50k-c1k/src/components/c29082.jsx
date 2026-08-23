import React from 'react';
const LABEL_29082 = 'component_29082';
export function Component29082({ value = 29082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29082, 'data-value': derived.doubled }, children);
}
export default Component29082;

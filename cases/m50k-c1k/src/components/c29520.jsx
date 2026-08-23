import React from 'react';
const LABEL_29520 = 'component_29520';
export function Component29520({ value = 29520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29520, 'data-value': derived.doubled }, children);
}
export default Component29520;

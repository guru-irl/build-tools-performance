import React from 'react';
const LABEL_29786 = 'component_29786';
export function Component29786({ value = 29786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29786, 'data-value': derived.doubled }, children);
}
export default Component29786;

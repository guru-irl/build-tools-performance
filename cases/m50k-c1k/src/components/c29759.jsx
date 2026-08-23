import React from 'react';
const LABEL_29759 = 'component_29759';
export function Component29759({ value = 29759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29759, 'data-value': derived.doubled }, children);
}
export default Component29759;

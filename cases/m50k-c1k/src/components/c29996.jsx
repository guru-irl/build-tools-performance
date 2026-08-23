import React from 'react';
const LABEL_29996 = 'component_29996';
export function Component29996({ value = 29996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29996, 'data-value': derived.doubled }, children);
}
export default Component29996;

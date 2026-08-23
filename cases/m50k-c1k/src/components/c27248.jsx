import React from 'react';
const LABEL_27248 = 'component_27248';
export function Component27248({ value = 27248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27248, 'data-value': derived.doubled }, children);
}
export default Component27248;

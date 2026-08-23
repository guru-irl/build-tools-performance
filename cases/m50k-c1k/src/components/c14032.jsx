import React from 'react';
const LABEL_14032 = 'component_14032';
export function Component14032({ value = 14032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14032, 'data-value': derived.doubled }, children);
}
export default Component14032;

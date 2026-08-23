import React from 'react';
const LABEL_5973 = 'component_5973';
export function Component5973({ value = 5973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5973, 'data-value': derived.doubled }, children);
}
export default Component5973;

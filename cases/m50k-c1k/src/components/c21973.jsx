import React from 'react';
const LABEL_21973 = 'component_21973';
export function Component21973({ value = 21973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21973, 'data-value': derived.doubled }, children);
}
export default Component21973;

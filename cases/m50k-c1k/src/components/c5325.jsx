import React from 'react';
const LABEL_5325 = 'component_5325';
export function Component5325({ value = 5325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5325, 'data-value': derived.doubled }, children);
}
export default Component5325;

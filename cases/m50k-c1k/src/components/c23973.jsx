import React from 'react';
const LABEL_23973 = 'component_23973';
export function Component23973({ value = 23973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23973, 'data-value': derived.doubled }, children);
}
export default Component23973;

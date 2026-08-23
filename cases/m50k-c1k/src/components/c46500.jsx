import React from 'react';
const LABEL_46500 = 'component_46500';
export function Component46500({ value = 46500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46500, 'data-value': derived.doubled }, children);
}
export default Component46500;

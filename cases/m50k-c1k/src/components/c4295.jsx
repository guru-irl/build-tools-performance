import React from 'react';
const LABEL_4295 = 'component_4295';
export function Component4295({ value = 4295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4295, 'data-value': derived.doubled }, children);
}
export default Component4295;

import React from 'react';
const LABEL_18295 = 'component_18295';
export function Component18295({ value = 18295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18295, 'data-value': derived.doubled }, children);
}
export default Component18295;

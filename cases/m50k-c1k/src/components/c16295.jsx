import React from 'react';
const LABEL_16295 = 'component_16295';
export function Component16295({ value = 16295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16295, 'data-value': derived.doubled }, children);
}
export default Component16295;

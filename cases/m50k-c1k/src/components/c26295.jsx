import React from 'react';
const LABEL_26295 = 'component_26295';
export function Component26295({ value = 26295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26295, 'data-value': derived.doubled }, children);
}
export default Component26295;

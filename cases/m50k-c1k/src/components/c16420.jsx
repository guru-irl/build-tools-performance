import React from 'react';
const LABEL_16420 = 'component_16420';
export function Component16420({ value = 16420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16420, 'data-value': derived.doubled }, children);
}
export default Component16420;

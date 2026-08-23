import React from 'react';
const LABEL_37806 = 'component_37806';
export function Component37806({ value = 37806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37806, 'data-value': derived.doubled }, children);
}
export default Component37806;

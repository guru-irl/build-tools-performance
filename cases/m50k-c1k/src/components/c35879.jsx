import React from 'react';
const LABEL_35879 = 'component_35879';
export function Component35879({ value = 35879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35879, 'data-value': derived.doubled }, children);
}
export default Component35879;

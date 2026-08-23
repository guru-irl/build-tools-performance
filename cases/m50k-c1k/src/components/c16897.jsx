import React from 'react';
const LABEL_16897 = 'component_16897';
export function Component16897({ value = 16897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16897, 'data-value': derived.doubled }, children);
}
export default Component16897;

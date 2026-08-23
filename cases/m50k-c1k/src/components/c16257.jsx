import React from 'react';
const LABEL_16257 = 'component_16257';
export function Component16257({ value = 16257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16257, 'data-value': derived.doubled }, children);
}
export default Component16257;

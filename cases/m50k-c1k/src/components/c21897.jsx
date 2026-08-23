import React from 'react';
const LABEL_21897 = 'component_21897';
export function Component21897({ value = 21897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21897, 'data-value': derived.doubled }, children);
}
export default Component21897;

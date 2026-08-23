import React from 'react';
const LABEL_26897 = 'component_26897';
export function Component26897({ value = 26897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26897, 'data-value': derived.doubled }, children);
}
export default Component26897;

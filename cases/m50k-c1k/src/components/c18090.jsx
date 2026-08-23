import React from 'react';
const LABEL_18090 = 'component_18090';
export function Component18090({ value = 18090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18090, 'data-value': derived.doubled }, children);
}
export default Component18090;

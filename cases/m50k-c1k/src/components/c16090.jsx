import React from 'react';
const LABEL_16090 = 'component_16090';
export function Component16090({ value = 16090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16090, 'data-value': derived.doubled }, children);
}
export default Component16090;

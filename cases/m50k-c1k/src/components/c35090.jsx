import React from 'react';
const LABEL_35090 = 'component_35090';
export function Component35090({ value = 35090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35090, 'data-value': derived.doubled }, children);
}
export default Component35090;

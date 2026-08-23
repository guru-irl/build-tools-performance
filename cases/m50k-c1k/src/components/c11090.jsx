import React from 'react';
const LABEL_11090 = 'component_11090';
export function Component11090({ value = 11090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11090, 'data-value': derived.doubled }, children);
}
export default Component11090;

import React from 'react';
const LABEL_41897 = 'component_41897';
export function Component41897({ value = 41897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41897, 'data-value': derived.doubled }, children);
}
export default Component41897;

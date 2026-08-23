import React from 'react';
const LABEL_41923 = 'component_41923';
export function Component41923({ value = 41923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41923, 'data-value': derived.doubled }, children);
}
export default Component41923;

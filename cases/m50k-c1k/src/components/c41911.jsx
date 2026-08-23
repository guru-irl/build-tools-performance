import React from 'react';
const LABEL_41911 = 'component_41911';
export function Component41911({ value = 41911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41911, 'data-value': derived.doubled }, children);
}
export default Component41911;

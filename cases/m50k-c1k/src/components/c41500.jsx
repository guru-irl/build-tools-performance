import React from 'react';
const LABEL_41500 = 'component_41500';
export function Component41500({ value = 41500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41500, 'data-value': derived.doubled }, children);
}
export default Component41500;

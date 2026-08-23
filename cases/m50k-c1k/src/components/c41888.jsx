import React from 'react';
const LABEL_41888 = 'component_41888';
export function Component41888({ value = 41888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41888, 'data-value': derived.doubled }, children);
}
export default Component41888;

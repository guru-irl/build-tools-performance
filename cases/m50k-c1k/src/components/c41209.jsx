import React from 'react';
const LABEL_41209 = 'component_41209';
export function Component41209({ value = 41209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41209, 'data-value': derived.doubled }, children);
}
export default Component41209;

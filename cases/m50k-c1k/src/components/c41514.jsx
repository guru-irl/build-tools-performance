import React from 'react';
const LABEL_41514 = 'component_41514';
export function Component41514({ value = 41514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41514, 'data-value': derived.doubled }, children);
}
export default Component41514;

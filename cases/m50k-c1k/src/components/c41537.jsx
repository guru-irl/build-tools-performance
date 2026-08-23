import React from 'react';
const LABEL_41537 = 'component_41537';
export function Component41537({ value = 41537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41537, 'data-value': derived.doubled }, children);
}
export default Component41537;

import React from 'react';
const LABEL_41334 = 'component_41334';
export function Component41334({ value = 41334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41334, 'data-value': derived.doubled }, children);
}
export default Component41334;

import React from 'react';
const LABEL_41299 = 'component_41299';
export function Component41299({ value = 41299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41299, 'data-value': derived.doubled }, children);
}
export default Component41299;

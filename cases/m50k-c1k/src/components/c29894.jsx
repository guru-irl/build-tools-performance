import React from 'react';
const LABEL_29894 = 'component_29894';
export function Component29894({ value = 29894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29894, 'data-value': derived.doubled }, children);
}
export default Component29894;

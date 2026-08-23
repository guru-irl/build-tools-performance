import React from 'react';
const LABEL_41357 = 'component_41357';
export function Component41357({ value = 41357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41357, 'data-value': derived.doubled }, children);
}
export default Component41357;

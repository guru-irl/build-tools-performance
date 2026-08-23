import React from 'react';
const LABEL_41415 = 'component_41415';
export function Component41415({ value = 41415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41415, 'data-value': derived.doubled }, children);
}
export default Component41415;

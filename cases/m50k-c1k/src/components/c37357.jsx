import React from 'react';
const LABEL_37357 = 'component_37357';
export function Component37357({ value = 37357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37357, 'data-value': derived.doubled }, children);
}
export default Component37357;

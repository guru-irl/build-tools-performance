import React from 'react';
const LABEL_40357 = 'component_40357';
export function Component40357({ value = 40357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40357, 'data-value': derived.doubled }, children);
}
export default Component40357;

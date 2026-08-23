import React from 'react';
const LABEL_41883 = 'component_41883';
export function Component41883({ value = 41883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41883, 'data-value': derived.doubled }, children);
}
export default Component41883;

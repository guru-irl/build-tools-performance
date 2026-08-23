import React from 'react';
const LABEL_41246 = 'component_41246';
export function Component41246({ value = 41246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41246, 'data-value': derived.doubled }, children);
}
export default Component41246;

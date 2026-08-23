import React from 'react';
const LABEL_44564 = 'component_44564';
export function Component44564({ value = 44564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44564, 'data-value': derived.doubled }, children);
}
export default Component44564;

import React from 'react';
const LABEL_41564 = 'component_41564';
export function Component41564({ value = 41564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41564, 'data-value': derived.doubled }, children);
}
export default Component41564;

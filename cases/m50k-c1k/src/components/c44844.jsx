import React from 'react';
const LABEL_44844 = 'component_44844';
export function Component44844({ value = 44844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44844, 'data-value': derived.doubled }, children);
}
export default Component44844;

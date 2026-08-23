import React from 'react';
const LABEL_34364 = 'component_34364';
export function Component34364({ value = 34364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34364, 'data-value': derived.doubled }, children);
}
export default Component34364;

import React from 'react';
const LABEL_44414 = 'component_44414';
export function Component44414({ value = 44414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44414, 'data-value': derived.doubled }, children);
}
export default Component44414;

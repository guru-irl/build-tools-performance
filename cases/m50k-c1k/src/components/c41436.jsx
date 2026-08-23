import React from 'react';
const LABEL_41436 = 'component_41436';
export function Component41436({ value = 41436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41436, 'data-value': derived.doubled }, children);
}
export default Component41436;

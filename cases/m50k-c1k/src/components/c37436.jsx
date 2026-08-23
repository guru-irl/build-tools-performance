import React from 'react';
const LABEL_37436 = 'component_37436';
export function Component37436({ value = 37436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37436, 'data-value': derived.doubled }, children);
}
export default Component37436;

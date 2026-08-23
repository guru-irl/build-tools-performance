import React from 'react';
const LABEL_41325 = 'component_41325';
export function Component41325({ value = 41325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41325, 'data-value': derived.doubled }, children);
}
export default Component41325;

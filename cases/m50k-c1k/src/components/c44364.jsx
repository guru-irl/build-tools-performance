import React from 'react';
const LABEL_44364 = 'component_44364';
export function Component44364({ value = 44364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44364, 'data-value': derived.doubled }, children);
}
export default Component44364;

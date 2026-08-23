import React from 'react';
const LABEL_40381 = 'component_40381';
export function Component40381({ value = 40381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40381, 'data-value': derived.doubled }, children);
}
export default Component40381;

import React from 'react';
const LABEL_41466 = 'component_41466';
export function Component41466({ value = 41466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41466, 'data-value': derived.doubled }, children);
}
export default Component41466;

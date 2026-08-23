import React from 'react';
const LABEL_41381 = 'component_41381';
export function Component41381({ value = 41381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41381, 'data-value': derived.doubled }, children);
}
export default Component41381;

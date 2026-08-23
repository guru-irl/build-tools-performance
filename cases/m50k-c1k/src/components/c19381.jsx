import React from 'react';
const LABEL_19381 = 'component_19381';
export function Component19381({ value = 19381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19381, 'data-value': derived.doubled }, children);
}
export default Component19381;

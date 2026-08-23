import React from 'react';
const LABEL_38381 = 'component_38381';
export function Component38381({ value = 38381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38381, 'data-value': derived.doubled }, children);
}
export default Component38381;

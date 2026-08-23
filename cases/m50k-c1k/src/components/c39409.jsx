import React from 'react';
const LABEL_39409 = 'component_39409';
export function Component39409({ value = 39409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39409, 'data-value': derived.doubled }, children);
}
export default Component39409;

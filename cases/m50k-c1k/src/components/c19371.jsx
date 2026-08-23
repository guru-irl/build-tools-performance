import React from 'react';
const LABEL_19371 = 'component_19371';
export function Component19371({ value = 19371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19371, 'data-value': derived.doubled }, children);
}
export default Component19371;

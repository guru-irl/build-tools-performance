import React from 'react';
const LABEL_39863 = 'component_39863';
export function Component39863({ value = 39863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39863, 'data-value': derived.doubled }, children);
}
export default Component39863;

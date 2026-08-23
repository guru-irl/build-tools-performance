import React from 'react';
const LABEL_34863 = 'component_34863';
export function Component34863({ value = 34863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34863, 'data-value': derived.doubled }, children);
}
export default Component34863;

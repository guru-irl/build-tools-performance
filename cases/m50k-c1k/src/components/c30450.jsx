import React from 'react';
const LABEL_30450 = 'component_30450';
export function Component30450({ value = 30450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30450, 'data-value': derived.doubled }, children);
}
export default Component30450;

import React from 'react';
const LABEL_32666 = 'component_32666';
export function Component32666({ value = 32666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32666, 'data-value': derived.doubled }, children);
}
export default Component32666;

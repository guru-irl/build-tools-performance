import React from 'react';
const LABEL_29450 = 'component_29450';
export function Component29450({ value = 29450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29450, 'data-value': derived.doubled }, children);
}
export default Component29450;

import React from 'react';
const LABEL_43228 = 'component_43228';
export function Component43228({ value = 43228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43228, 'data-value': derived.doubled }, children);
}
export default Component43228;

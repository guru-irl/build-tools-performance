import React from 'react';
const LABEL_43029 = 'component_43029';
export function Component43029({ value = 43029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43029, 'data-value': derived.doubled }, children);
}
export default Component43029;

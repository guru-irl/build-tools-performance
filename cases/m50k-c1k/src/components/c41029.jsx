import React from 'react';
const LABEL_41029 = 'component_41029';
export function Component41029({ value = 41029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41029, 'data-value': derived.doubled }, children);
}
export default Component41029;

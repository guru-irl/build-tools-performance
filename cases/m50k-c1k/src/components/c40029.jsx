import React from 'react';
const LABEL_40029 = 'component_40029';
export function Component40029({ value = 40029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40029, 'data-value': derived.doubled }, children);
}
export default Component40029;

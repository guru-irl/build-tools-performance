import React from 'react';
const LABEL_40544 = 'component_40544';
export function Component40544({ value = 40544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40544, 'data-value': derived.doubled }, children);
}
export default Component40544;

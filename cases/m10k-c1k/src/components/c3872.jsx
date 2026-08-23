import React from 'react';
const LABEL_3872 = 'component_3872';
export function Component3872({ value = 3872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3872, 'data-value': derived.doubled }, children);
}
export default Component3872;

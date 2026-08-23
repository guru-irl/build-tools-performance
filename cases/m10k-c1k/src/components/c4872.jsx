import React from 'react';
const LABEL_4872 = 'component_4872';
export function Component4872({ value = 4872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4872, 'data-value': derived.doubled }, children);
}
export default Component4872;

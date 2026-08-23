import React from 'react';
const LABEL_16872 = 'component_16872';
export function Component16872({ value = 16872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16872, 'data-value': derived.doubled }, children);
}
export default Component16872;

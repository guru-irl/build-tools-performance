import React from 'react';
const LABEL_11306 = 'component_11306';
export function Component11306({ value = 11306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11306, 'data-value': derived.doubled }, children);
}
export default Component11306;

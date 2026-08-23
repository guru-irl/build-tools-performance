import React from 'react';
const LABEL_25140 = 'component_25140';
export function Component25140({ value = 25140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25140, 'data-value': derived.doubled }, children);
}
export default Component25140;

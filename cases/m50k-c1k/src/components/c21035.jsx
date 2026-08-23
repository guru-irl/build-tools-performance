import React from 'react';
const LABEL_21035 = 'component_21035';
export function Component21035({ value = 21035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21035, 'data-value': derived.doubled }, children);
}
export default Component21035;

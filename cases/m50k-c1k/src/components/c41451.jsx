import React from 'react';
const LABEL_41451 = 'component_41451';
export function Component41451({ value = 41451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41451, 'data-value': derived.doubled }, children);
}
export default Component41451;

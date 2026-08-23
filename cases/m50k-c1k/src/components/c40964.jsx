import React from 'react';
const LABEL_40964 = 'component_40964';
export function Component40964({ value = 40964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40964, 'data-value': derived.doubled }, children);
}
export default Component40964;

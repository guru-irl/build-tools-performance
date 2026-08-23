import React from 'react';
const LABEL_16964 = 'component_16964';
export function Component16964({ value = 16964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16964, 'data-value': derived.doubled }, children);
}
export default Component16964;

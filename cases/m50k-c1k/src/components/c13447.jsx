import React from 'react';
const LABEL_13447 = 'component_13447';
export function Component13447({ value = 13447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13447, 'data-value': derived.doubled }, children);
}
export default Component13447;
